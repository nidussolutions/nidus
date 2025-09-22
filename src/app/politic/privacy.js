import Main from '@/components/Main';
import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Stack,
  Button,
  AspectRatio,
  Badge,
} from '@chakra-ui/react';

const portfolioItems = [
  {
    name: 'Rara Flor Orquídeas',
    logo: '/assets/raraflor.jpg',
    site: 'https://raraflororquideas.com/',
    description: `Projeto desenvolvido para a Rara-Flor, um e-commerce focado na venda de orquídeas raras e exclusivas, pensado para entusiastas e colecionadores.
O site foi construído sobre um CMS de fácil gerenciamento, permitindo controle ágil de produtos, pedidos e promoções.
A identidade visual foi criada para transmitir sofisticação e conexão com a natureza: a logo combina o verde da flora com o sol nascente e flores delicadas, representando o cuidado e a beleza das espécies oferecidas.`,
    tags: ['E-commerce', 'Identidade Visual'],
  },
];

export default function WorkPage() {
  return (
    <Main>
      <Box
        as="section"
        position="relative"
        px={{ base: 4, md: 10 }}
        py={{ base: 8, md: 12 }}
        maxW="7xl"
        mx="auto"
        bgGradient="linear(to-b, rgba(10,12,18,.82), rgba(14,16,22,.66))"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          pointerEvents: 'none',
          rounded: { base: '2xl', md: '3xl' },
        }}
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        rounded={{ base: '2xl', md: '3xl' }}
      >
        <Heading
          color="whiteAlpha.900"
          mb={{ base: 6, md: 8 }}
          letterSpacing="1px"
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          Politica de Privacidade
        </Heading>
<body>
  <header class="wrap">
    <h1>Política de Privacidade</h1>
    <p>Última atualização: <strong>22/09/2025</strong></p>
    <div class="card">
      <p>
        Esta Política descreve como a <strong>Procon/ES</strong> (“<strong>nós</strong>”) coleta, utiliza e protege dados pessoais
        em seus canais digitais, incluindo atendimento via WhatsApp Business, websites e integrações técnicas (por exemplo, webhooks e automações n8n).
        Nosso compromisso é tratar seus dados com segurança, transparência e em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
      </p>
    </div>
  </header>

  <main class="wrap">
    <nav class="card toc" aria-label="Sumário">
      <h2>Sumário</h2>
      <a href="#quem-somos">1. Quem somos</a>
      <a href="#abrangencia">2. Abrangência</a>
      <a href="#dados-coletados">3. Quais dados coletamos</a>
      <a href="#bases-finais">4. Bases legais e finalidades</a>
      <a href="#compartilhamento">5. Compartilhamento e operadores</a>
      <a href="#retencao">6. Retenção e descarte</a>
      <a href="#seguranca">7. Segurança da informação</a>
      <a href="#direitos">8. Seus direitos (LGPD)</a>
      <a href="#cookies">9. Cookies e tecnologias similares</a>
      <a href="#transferencias">10. Transferências internacionais</a>
      <a href="#menores">11. Menores de idade</a>
      <a href="#contato">12. Contato do Encarregado (DPO)</a>
      <a href="#mudancas">13. Mudanças nesta política</a>
    </nav>

    <section id="quem-somos" class="card">
      <h2>1. Quem somos</h2>
      <p>
        Procon/ES — <span class="muted">CNPJ/razão social: TODO informar</span>. Endereço: <span class="muted">TODO informar</span>.
        Para efeitos de proteção de dados, atuamos como <strong>controladora</strong> dos dados pessoais tratados em nossos canais de atendimento.
      </p>
    </section>

    <section id="abrangencia" class="card">
      <h2>2. Abrangência</h2>
      <p>
        Esta Política se aplica ao uso de nossos serviços digitais, incluindo:
      </p>
      <ul>
        <li>Atendimento via WhatsApp Business (inclusive mensagens de texto, áudio, imagem e documentos).</li>
        <li>Formulários e páginas hospedadas por nós.</li>
        <li>Integrações técnicas necessárias para operação (por exemplo, webhooks e automações n8n).</li>
      </ul>
      <p>
        Serviços e sites de terceiros (por exemplo, WhatsApp/Meta) possuem políticas próprias. Recomendamos que você as consulte.
      </p>
    </section>

    <section id="dados-coletados" class="card">
      <h2>3. Quais dados coletamos</h2>
      <h3>3.1. Dados fornecidos por você</h3>
      <ul>
        <li>Conteúdo das mensagens (texto e anexos) enviadas no WhatsApp ou formulários.</li>
        <li>Dados cadastrais que você optar por informar (por exemplo, nome, e-mail, telefone).</li>
        <li>Documentos e comprovantes que você anexar voluntariamente.</li>
      </ul>
      <h3>3.2. Dados coletados automaticamente</h3>
      <ul>
        <li>Metadados de mensagens (ex.: número do WhatsApp, <code>wa_id</code>, identificadores de mensagem, carimbo de data e hora).</li>
        <li>Logs técnicos de acesso e uso (ex.: IP, data/hora, URL chamada, status HTTP) quando você usa nosso site/API.</li>
        <li>Dados de sessão do navegador (quando aplicável), como cookies essenciais.</li>
      </ul>
      <h3>3.3. Dados sensíveis</h3>
      <p>
        Não solicitamos dados sensíveis (saúde, religião, etc.). Caso sejam fornecidos por você espontaneamente, trataremos apenas na medida do necessário para o atendimento e conforme a LGPD.
      </p>
    </section>

    <section id="bases-finais" class="card">
      <h2>4. Bases legais e finalidades</h2>
      <p>Tratamos dados com base, principalmente, em:</p>
      <ul>
        <li><strong>Execução de contrato</strong> ou procedimentos preliminares: para viabilizar seu atendimento.</li>
        <li><strong>Cumprimento de obrigação legal/regulatória</strong>: quando aplicável a registros e guarda de informações.</li>
        <li><strong>Legítimo interesse</strong>: para segurança, prevenção a fraudes, melhoria de serviços e analytics essenciais.</li>
        <li><strong>Consentimento</strong>: quando necessário e solicitado de forma destacada.</li>
      </ul>
      <p>Finalidades principais incluem:</p>
      <ul>
        <li>Atender e responder suas solicitações.</li>
        <li>Formar o histórico do atendimento e aprimorar a qualidade do serviço.</li>
        <li>Manter registros e logs de operação, inclusive para auditoria e segurança.</li>
        <li>Cumprir obrigações legais e atender requisições de autoridades, quando necessário.</li>
      </ul>
    </section>

    <section id="compartilhamento" class="card">
      <h2>5. Compartilhamento e operadores</h2>
      <p>
        Poderemos compartilhar dados pessoais com <strong>operadores</strong> e parceiros tecnológicos estritamente necessários para prestar o serviço,
        tais como provedores de infraestrutura de hospedagem, processamento de mensagens (ex.: WhatsApp/Meta) e automação (ex.: n8n).
        Esses terceiros tratam dados conforme nossas instruções e contratos, observando a LGPD.
      </p>
      <p>
        Também poderemos compartilhar dados para cumprir obrigações legais, ordens judiciais ou solicitações de autoridades competentes.
      </p>
    </section>

    <section id="retencao" class="card">
      <h2>6. Retenção e descarte</h2>
      <p>
        Mantemos os dados pelo tempo necessário ao atendimento e para cumprimento de obrigações legais.
        Após esse período, promovemos o descarte seguro ou anonimização, conforme aplicável.
      </p>
      <p class="muted">
        Exemplo: mensagens de atendimento podem ser retidas por <em>TODO: informar período padrão</em> meses para histórico, auditoria e segurança.
      </p>
    </section>

    <section id="seguranca" class="card">
      <h2>7. Segurança da informação</h2>
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais sob nossa responsabilidade, tais como controle de acesso,
        criptografia em trânsito, registros de auditoria e políticas internas de segurança. Nenhuma plataforma, porém, é 100% livre de riscos.
        Em caso de incidente que possa acarretar risco relevante, agiremos conforme a LGPD e autoridades competentes.
      </p>
    </section>

    <section id="direitos" class="card">
      <h2>8. Seus direitos (LGPD)</h2>
      <p>
        Você pode, a qualquer momento e nos termos da LGPD, exercer seus direitos de:
      </p>
      <ul>
        <li>Confirmação de tratamento e acesso aos dados.</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade.</li>
        <li>Portabilidade, quando aplicável.</li>
        <li>Eliminação de dados tratados com consentimento, quando aplicável.</li>
        <li>Informação sobre compartilhamentos e a possibilidade de não consentir, quando aplicável.</li>
        <li>Revisão de decisões tomadas unicamente com base em tratamento automatizado, quando aplicável.</li>
      </ul>
      <p>
        Para exercer seus direitos, consulte a seção <a href="#contato">Contato do Encarregado (DPO)</a>.
      </p>
    </section>

    <section id="cookies" class="card">
      <h2>9. Cookies e tecnologias similares</h2>
      <p>
        Utilizamos apenas cookies essenciais para o funcionamento e a segurança do site/sistema.
        Caso passemos a empregar cookies analíticos ou de terceiros, atualizaremos esta Política e, quando necessário, solicitaremos seu consentimento.
      </p>
    </section>

    <section id="transferencias" class="card">
      <h2>10. Transferências internacionais</h2>
      <p>
        Alguns prestadores de serviço podem estar localizados fora do Brasil. Nesses casos, adotamos salvaguardas adequadas e exigimos a observância da LGPD e padrões equivalentes de proteção.
      </p>
    </section>

    <section id="menores" class="card">
      <h2>11. Menores de idade</h2>
      <p>
        Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente dados de crianças e adolescentes sem a anuência adequada.
        Se você é responsável legal e acredita que um menor nos forneceu dados pessoais, entre em contato para providenciarmos as medidas cabíveis.
      </p>
    </section>

    <section id="contato" class="card">
      <h2>12. Contato do Encarregado (DPO)</h2>
      <p>
        E-mail do Encarregado: <strong>TODO: dpo@procon-es.gov.br</strong><br />
        Endereço para correspondência: <span class="muted">TODO: endereço completo</span><br />
        Ao entrar em contato, descreva o seu pedido de forma clara e inclua, quando possível, informações que nos ajudem a localizar seu registro.
      </p>
    </section>

    <section id="mudancas" class="card">
      <h2>13. Mudanças nesta política</h2>
      <p>
        Podemos atualizar esta Política de tempos em tempos para refletir alterações legais, técnicas ou operacionais.
        Quando apropriado, notificaremos você por nossos canais. A data de “Última atualização” indica a versão vigente.
      </p>
    </section>

    <div class="kpi">
      <div>
        <h3>Controladora</h3>
        <p>Procon/ES</p>
      </div>
      <div>
        <h3>Base legal principal</h3>
        <p>Execução de contrato, legítimo interesse, obrigação legal e consentimento quando necessário.</p>
      </div>
      <div>
        <h3>Canais</h3>
        <p>WhatsApp Business, Web, integrações (webhook/n8n).</p>
      </div>
    </div>
  </main>

  <footer class="wrap footer">
    © <span id="y"></span> Procon/ES. Todos os direitos reservados.
  </footer>

  <script>
    document.getElementById('y').textContent = new Date().getFullYear();
  </script>
</body>
       
      </Box>
    </Main>
  );
}
