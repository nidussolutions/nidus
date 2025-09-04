#!/usr/bin/env bash
# deploy.sh
set -Eeuo pipefail

### ===== Config =====
APP_NAME="${APP_NAME:-nidus-app}"
PORT="${PORT:-3001}"
LOG_DIR="${LOG_DIR:-./.logs}"
LOG_FILE="$LOG_DIR/deploy-$(date +%Y%m%d-%H%M%S).log"

### ===== UX =====
c_ok()   { printf "\033[32m✔\033[0m %s\n" "$*"; }
c_err()  { printf "\033[31m✘ %s\033[0m\n" "$*" >&2; }
c_info() { printf "\033[36mℹ\033[0m %s\n" "$*"; }

trap 'code=$?; ((code!=0)) && c_err "Falha. Veja o log: $LOG_FILE"; exit $code' EXIT

### ===== Helpers =====
port_pid() {
  # tenta lsof; fallback para ss
  if command -v lsof >/dev/null 2>&1; then
    lsof -t -iTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true
  else
    ss -ltnp 2>/dev/null | awk -v p=":$PORT" '$4 ~ p {print $6}' | sed -E 's/.*pid=([0-9]+).*/\1/' | head -n1
  fi
}

pm2_has_app() {
  pm2 describe "$APP_NAME" >/dev/null 2>&1
}

kill_pid_gracefully() {
  local pid="$1"
  if [[ -z "$pid" ]]; then return 0; fi
  if ! ps -p "$pid" >/dev/null 2>&1; then return 0; fi
  c_info "Enviando SIGTERM ao PID $pid (porta $PORT)…"
  kill "$pid" || true
  for _ in {1..10}; do
    sleep 0.5
    ps -p "$pid" >/dev/null 2>&1 || { c_ok "Processo $pid finalizado."; return 0; }
  done
  c_info "SIGKILL no PID $pid…"
  kill -9 "$pid" || true
}

### ===== Start =====
mkdir -p "$LOG_DIR"; : > "$LOG_FILE"
c_info "Deploy iniciado | PORT=$PORT | LOG=$LOG_FILE"

# Ferramentas
command -v git  >/dev/null || { c_err "git não encontrado"; exit 127; }
command -v pnpm >/dev/null || { c_err "pnpm não encontrado"; exit 127; }
command -v pm2  >/dev/null || { c_err "pm2 não encontrado"; exit 127; }

# 1) Atualiza código
current_branch="$(git rev-parse --abbrev-ref HEAD)"
c_info "Atualizando branch $current_branch…"
git fetch >> "$LOG_FILE" 2>&1
git pull --ff-only origin "$current_branch" >> "$LOG_FILE" 2>&1
c_ok "Código atualizado."

# 2) Instala dependências determinísticas
c_info "Instalando dependências (frozen-lockfile)…"
pnpm install --frozen-lockfile >> "$LOG_FILE" 2>&1
c_ok "Dependências OK."

# 3) Build
c_info "Build de produção…"
pnpm build >> "$LOG_FILE" 2>&1
c_ok "Build finalizado."

# 4) Verifica artefatos
if [[ -d .next || -d dist || -d build ]]; then
  c_ok "Artefatos detectados."
else
  c_err "Nenhum diretório de artefato (.next/dist/build) encontrado."
  exit 3
fi

# 5) Sobe/recarrega aplicação
export PORT

if pm2_has_app; then
  c_info "App $APP_NAME já conhecida pelo PM2. Fazendo reload sem downtime…"
  # Vai recarregar mantendo a mesma porta
  pm2 reload "$APP_NAME" --update-env >> "$LOG_FILE" 2>&1 || {
    c_info "Reload falhou; tentando startOrReload do ecosystem…"
    pm2 startOrReload ecosystem.config.cjs --env production >> "$LOG_FILE" 2>&1
  }
else
  # Se não existe no PM2 mas a porta está ocupada por OUTRO processo, mata e sobe
  EXISTING_PID="$(port_pid || true)"
  if [[ -n "${EXISTING_PID:-}" ]]; then
    c_info "Porta $PORT ocupada por PID $EXISTING_PID (fora do PM2). Encerrando…"
    kill_pid_gracefully "$EXISTING_PID"
  fi
  c_info "Iniciando via PM2 pela primeira vez…"
  pm2 start ecosystem.config.cjs --env production >> "$LOG_FILE" 2>&1
fi

# 6) Persistência no boot
pm2 save >> "$LOG_FILE" 2>&1

c_ok "Deploy OK. App: $APP_NAME rodando na porta $PORT."
c_info "Comandos úteis: pm2 status | pm2 logs $APP_NAME"
