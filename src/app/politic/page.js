'use client';

import Main from '@/components/Main';
import {
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  Stack,
  List,
  ListItem,
  Divider,
} from '@chakra-ui/react';

function Section({ id, title, children, pb = 6 }) {
  return (
    <Box
      id={id}
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      rounded="xl"
      p={{ base: 4, md: 6 }}
      bg="blackAlpha.300"
      mb={6}
      pb={pb}
    >
      <Heading as="h2" size="md" color="whiteAlpha.900" mb={2}>
        {title}
      </Heading>
      <Stack spacing={3} color="whiteAlpha.900">
        {children}
      </Stack>
    </Box>
  );
}

function Kpi({ title, text }) {
  return (
    <Box
      flex="1"
      minW={{ base: '100%', md: '240px' }}
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      rounded="xl"
      p={{ base: 4, md: 6 }}
      bg="blackAlpha.300"
    >
      <Heading as="h3" size="sm" color="whiteAlpha.900" mb={2}>
        {title}
      </Heading>
      <Text color="whiteAlpha.900">{text}</Text>
    </Box>
  );
}

export default function PrivacyPage() {
  const lastUpdate = '22/09/2025';

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
          mb={{ base: 2, md: 3 }}
          letterSpacing="1px"
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          Política de Privacidade
        </Heading>

        <Text color="whiteAlpha.700" mb={6}>
          Última atualização: <strong>{lastUpdate}</strong>
        </Text>

        {/* Intro */}
        <Box
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          rounded="xl"
          p={{ base: 4, md: 6 }}
          bg="blackAlpha.400"
          mb={8}
        >
          <Text color="whiteAlpha.900">
            Esta Política descreve como a <strong>Procon/ES</strong> (“nós”) coleta, utiliza e protege dados pessoais
            em seus canais digitais, incluindo atendimento via WhatsApp Business, websites e integrações técnicas
            (por exemplo, webhooks e automações n8n). Nosso compromisso é tratar seus dados com segurança, transparência
            e em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </Text>
        </Box>

        {/* Sumário */}
        <Box
          id="sumario"
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          rounded="xl"
          p={{ base: 4, md: 6 }}
          bg="blackAlpha.300"
          mb={8}
        >
          <Heading as="h2" size="md" color="whiteAlpha.900" mb={3}>
            Sumário
          </Heading>
          <Stack spacing={2} color="whiteAlpha.900">
            {[
              ['#quem-somos', '1. Quem somos'],
              ['#abrangencia', '2. Abrangência'],
              ['#dados-coletados', '3. Quais dados coletamos'],
              ['#bases-finais', '4. Bases legais e finalidades'],
              ['#compartilhamento', '5. Compartilhamento e operadores'],
              ['#retencao', '6. Retenção e descarte'],
              ['#seguranca', '7. Segurança da informação'],
              ['#direitos', '8. Seus direitos (LGPD)'],
              ['#cookies', '9. Cookies e tecnologias similares'],
              ['#transferencias', '10. Transferências internacionais'],
              ['#menores', '11. Menores de idade'],
              ['#contato', '12. Contato do Encarregado (DPO)'],
              ['#mudancas', '13. Mudanças nesta política'],
            ].map(([href, label]) => (
              <ChakraLink key={href} href={href} _hover={{ textDecoration: 'underline' }}>
                {label}
              </ChakraLink>
            ))}
          </Stack>
        </Box>

        {/* Seções */}
        <Section id="quem-somos" title="1. Quem somos">
          <Text>
            Procon/ES — <Text as="span" color="whiteAlpha.700">CNPJ/razão social: TODO informar</Text>. Endereço:{' '}
            <Text as="span" color="whiteAlpha.700">TODO informar</Text>. Para efeitos de proteção de dados, atuamos
            como <strong>controladora</strong> dos dados pessoais tratados em nossos canais de atendimento.
          </Text>
        </Section>

        <Section id="abrangencia" title="2. Abrangência">
          <Text>Esta Política se aplica ao uso de nossos serviços digitais, incluindo:</Text>
          <List spacing={2} mt={2} styleType="disc" pl={5}>
            <ListItem>Atendimento via WhatsApp Business (inclusive mensagens de texto, áudio, imagem e documentos).</ListItem>
            <ListItem>Formulários e páginas hospedadas por nós.</ListItem>
            <ListItem>Integrações técnicas necessárias para operação (por exemplo, webhooks e automações n8n).</ListItem>
          </List>
          <Text mt={3}>
            Serviços e sites de terceiros (por exemplo, WhatsApp/Meta) possuem políticas próprias. Recomendamos que você as consulte.
          </Text>
        </Section>

        <Section id="dados-coletados" title="3. Quais dados coletamos">
          <Heading as="h3" size="sm" color="whiteAlpha.900" mt={2} mb={1}>3.1. Dados fornecidos por você</Heading>
          <List spacing={2} styleType="disc" pl={5}>
            <ListItem>Conteúdo das mensagens (texto e anexos) enviadas no WhatsApp ou formulários.</ListItem>
            <ListItem>Dados cadastrais que você optar por informar (por exemplo, nome, e-mail, telefone).</ListItem>
            <ListItem>Documentos e comprovantes que você anexar voluntariamente.</ListItem>
          </List>

          <Heading as="h3" size="sm" color="whiteAlpha.900" mt={4} mb={1}>3.2. Dados coletados automaticamente</Heading>
          <List spacing={2} styleType="disc" pl={5}>
            <ListItem>
              Metadados de mensagens (ex.: número do WhatsApp, <code>wa_id</code>, identificadores de mensagem, carimbo de data e hora).
            </ListItem>
            <ListItem>Logs técnicos de acesso e uso (ex.: IP, data/hora, URL chamada, status HTTP) quando você usa nosso site/API.</ListItem>
            <ListItem>Dados de sessão do navegador (quando aplicável), como cookies essenciais.</ListItem>
          </List>

          <Heading as="h3" size="sm" color="whiteAlpha.900" mt={4} mb={1}>3.3. Dados sensíveis</Heading>
          <Text>
            Não solicitamos dados sensíveis (saúde, religião, etc.). Caso sejam fornecidos por você espontaneamente, trataremos apenas
            na medida do necessário para o atendimento e conforme a LGPD.
          </Text>
        </Section>

        <Section id="bases-finais" title="4. Bases legais e finalidades">
          <Text>Tratamos dados com base, principalmente, em:</Text>
          <List spacing={2} styleType="disc" pl={5} mt={2}>
            <ListItem><strong>Execução de contrato</strong> ou procedimentos preliminares: para viabilizar seu atendimento.</ListItem>
            <ListItem><strong>Cumprimento de obrigação legal/regulatória</strong>: quando aplicável a registros e guarda de informações.</ListItem>
            <ListItem><strong>Legítimo interesse</strong>: para segurança, prevenção a fraudes, melhoria de serviços e analytics essenciais.</ListItem>
            <ListItem><strong>Consentimento</strong>: quando necessário e solicitado de forma destacada.</ListItem>
          </List>
          <Text mt={3}>Finalidades principais incluem:</Text>
          <List spacing={2} styleType="disc" pl={5} mt={2}>
            <ListItem>Atender e responder suas solicitações.</ListItem>
            <ListItem>Formar o histórico do atendimento e aprimorar a qualidade do serviço.</ListItem>
            <ListItem>Manter registros e logs de operação, inclusive para auditoria e segurança.</ListItem>
            <ListItem>Cumprir obrigações legais e atender requisições de autoridades, quando necessário.</ListItem>
          </List>
        </Section>

        <Section id="compartilhamento" title="5. Compartilhamento e operadores">
          <Text>
            Poderemos compartilhar dados pessoais com <strong>operadores</strong> e parceiros tecnológicos estritamente necessários
            para prestar o serviço, tais como provedores de infraestrutura de hospedagem, processamento de mensagens (ex.: WhatsApp/Meta)
            e automação (ex.: n8n). Esses terceiros tratam dados conforme nossas instruções e contratos, observando a LGPD.
          </Text>
          <Text mt={3}>
            Também poderemos compartilhar dados para cumprir obrigações legais, ordens judiciais ou solicitações de autoridades competentes.
          </Text>
        </Section>

        <Section id="retencao" title="6. Retenção e descarte">
          <Text>
            Mantemos os dados pelo tempo necessário ao atendimento e para cumprimento de obrigações legais. Após esse período, promovemos
            o descarte seguro ou anonimização, conforme aplicável.
          </Text>
          <Text color="whiteAlpha.700" mt={2}>
            Exemplo: mensagens de atendimento podem ser retidas por <em>TODO: informar período padrão</em> meses para histórico, auditoria e segurança.
          </Text>
        </Section>

        <Section id="seguranca" title="7. Segurança da informação">
          <Text>
            Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais sob nossa responsabilidade, tais como
            controle de acesso, criptografia em trânsito, registros de auditoria e políticas internas de segurança. Nenhuma plataforma, porém,
            é 100% livre de riscos. Em caso de incidente que possa acarretar risco relevante, agiremos conforme a LGPD e autoridades competentes.
          </Text>
        </Section>

        <Section id="direitos" title="8. Seus direitos (LGPD)">
          <Text>Você pode, a qualquer momento e nos termos da LGPD, exercer seus direitos de:</Text>
          <List spacing={2} styleType="disc" pl={5} mt={2}>
            <ListItem>Confirmação de tratamento e acesso aos dados.</ListItem>
            <ListItem>Correção de dados incompletos, inexatos ou desatualizados.</ListItem>
            <ListItem>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade.</ListItem>
            <ListItem>Portabilidade, quando aplicável.</ListItem>
            <ListItem>Eliminação de dados tratados com consentimento, quando aplicável.</ListItem>
            <ListItem>Informação sobre compartilhamentos e a possibilidade de não consentir, quando aplicável.</ListItem>
            <ListItem>Revisão de decisões tomadas unicamente com base em tratamento automatizado, quando aplicável.</ListItem>
          </List>
          <Text mt={3}>
            Para exercer seus direitos, consulte a seção <ChakraLink href="#contato">Contato do Encarregado (DPO)</ChakraLink>.
          </Text>
        </Section>

        <Section id="cookies" title="9. Cookies e tecnologias similares">
          <Text>
            Utilizamos apenas cookies essenciais para o funcionamento e a segurança do site/sistema. Caso passemos a empregar cookies analíticos
            ou de terceiros, atualizaremos esta Política e, quando necessário, solicitaremos seu consentimento.
          </Text>
        </Section>

        <Section id="transferencias" title="10. Transferências internacionais">
          <Text>
            Alguns prestadores de serviço podem estar localizados fora do Brasil. Nesses casos, adotamos salvaguardas adequadas e exigimos a observância
            da LGPD e padrões equivalentes de proteção.
          </Text>
        </Section>

        <Section id="menores" title="11. Menores de idade">
          <Text>
            Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente dados de crianças e adolescentes sem a anuência adequada.
            Se você é responsável legal e acredita que um menor nos forneceu dados pessoais, entre em contato para providenciarmos as medidas cabíveis.
          </Text>
        </Section>

        <Section id="contato" title="12. Contato do Encarregado (DPO)">
          <Text>
            E-mail do Encarregado: <strong>TODO: dpo@procon-es.gov.br</strong><br />
            Endereço para correspondência: <Text as="span" color="whiteAlpha.700">TODO: endereço completo</Text><br />
            Ao entrar em contato, descreva o seu pedido de forma clara e inclua, quando possível, informações que nos ajudem a localizar seu registro.
          </Text>
        </Section>

        <Section id="mudancas" title="13. Mudanças nesta política" pb={0}>
          <Text>
            Podemos atualizar esta Política de tempos em tempos para refletir alterações legais, técnicas ou operacionais. Quando apropriado,
            notificaremos você por nossos canais. A data de “Última atualização” indica a versão vigente.
          </Text>
        </Section>

        <Divider my={6} borderColor="whiteAlpha.300" />
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} color="whiteAlpha.900">
          <Kpi title="Controladora" text="Procon/ES" />
          <Kpi title="Base legal principal" text="Execução de contrato, legítimo interesse, obrigação legal e consentimento quando necessário." />
          <Kpi title="Canais" text="WhatsApp Business, Web, integrações (webhook/n8n)." />
        </Stack>

        <Text color="whiteAlpha.600" mt={8} fontSize="sm">
          © {new Date().getFullYear()} Procon/ES. Todos os direitos reservados.
        </Text>
      </Box>
    </Main>
  );
}
