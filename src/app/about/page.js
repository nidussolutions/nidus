import Main from '@/components/Main';
import Logo from '@/components/Logo';
import {
  Box,
  Grid,
  GridItem,
  Stack,
  Heading,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';

export default function AboutPage() {
  return (
    <Main>
      <Box
        as="section"
        position="relative"
        px={{ base: 4, md: 10 }}
        maxW="7xl"
        mx="auto"
        bgGradient="linear(to-b, rgba(10,12,18,.8), rgba(14,16,22,.6))"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          pointerEvents: 'none',
        }}
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        rounded={{ base: 'none', md: '3xl' }}
      >
        <Stack spacing={{ base: 8, md: 12 }} position="relative">
          <Heading
            as="h1"
            lineHeight="1.15"
            letterSpacing={{ base: '0.18em', md: '0.22em' }}
            fontSize={{ base: '1.1rem', md: '2.8rem' }}
            fontFamily="edosz"
            textTransform="uppercase"
            bgClip="text"
            bgGradient="linear(to-r, cyan.300, purple.300)"
            color="whiteAlpha.900"
            textAlign="center"
            pt={6}
          >
            Sobre a Nidus
          </Heading>

          <Grid
            templateColumns={{ base: '1fr', md: '350px 1fr' }}
            gap={{ base: 6, md: 10 }}
            alignItems="center"
          >
            <GridItem>
              <Logo />
            </GridItem>

            <GridItem>
              <VStack spacing={2} align="start">
                <Text
                  maxW="2xl"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="whiteAlpha.900"
                >
                  Nascemos no limiar entre o{' '}
                  <Box as="span" color="purple.300" fontWeight="semibold">
                    experimental
                  </Box>{' '}
                  e o{' '}
                  <Box as="span" color="cyan.300" fontWeight="semibold">
                    funcional
                  </Box>
                  : um estúdio que transforma ideias cruas em soluções digitais
                  tangíveis.
                </Text>
                <Text
                  maxW="2xl"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="whiteAlpha.900"
                >
                  Da criação de{' '}
                  <Box as="span" color="cyan.300" fontWeight="semibold">
                    sites e sistemas sob medida
                  </Box>{' '}
                  à{' '}
                  <Box as="span" color="purple.300" fontWeight="semibold">
                    automação de processos
                  </Box>{' '}
                  e{' '}
                  <Box as="span" color="cyan.300" fontWeight="semibold">
                    integrações cloud
                  </Box>
                  , entregamos tecnologia que acelera crescimento com{' '}
                  <Box as="span" color="purple.300" fontWeight="semibold">
                    menos fricção
                  </Box>{' '}
                  e{' '}
                  <Box as="span" color="cyan.300" fontWeight="semibold">
                    mais resultado
                  </Box>
                  .
                </Text>
              </VStack>
            </GridItem>
          </Grid>

          <Box borderBottom="1px solid" borderColor="whiteAlpha.300" my={6} />

          <VStack spacing={5} align="stretch" pb={6} mt={-8}>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="whiteAlpha.800"
              textAlign="justify"
            >
              A Nidus opera com uma filosofia simples:{' '}
              <Box as="span" color="cyan.300" fontWeight="semibold">
                construir o essencial muito bem
              </Box>
              . Mantemos a estética{' '}
              <Box as="span" color="purple.300" fontWeight="semibold">
                minimalista e underground
              </Box>{' '}
              porque performance e clareza importam. Cada projeto nasce de um
              diagnóstico direto, sem rodeios: mapeamos o problema, definimos a
              estratégia e executamos em ciclos rápidos, sempre medindo impacto
              e aprendendo com dados reais.
            </Text>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="whiteAlpha.800"
              textAlign="justify"
            >
              Nossa missão é{' '}
              <Box as="span" color="cyan.300" fontWeight="semibold">
                entregar tecnologia que simplifica, conecta e escala
              </Box>
              . Isso significa arquitetura bem pensada, padrões sólidos, e
              integração limpa com o que você já usa. É comum chegarmos onde
              outros pararam: APIs difíceis, infra desorganizada, código sem
              dono. Nós entramos, organizamos e{' '}
              <Box as="span" color="purple.300" fontWeight="semibold">
                colocamos para rodar em produção
              </Box>
              .
            </Text>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="whiteAlpha.800"
              textAlign="justify"
            >
              Operamos como parceiros, não como fornecedores. Transparência em
              cada entrega, comunicação objetiva e metas compartilhadas. Nosso
              foco é a sua curva de resultado — menos slides, mais{' '}
              <Box as="span" color="cyan.300" fontWeight="semibold">
                deploy
              </Box>
              . Quando é preciso inovar, fazemos com propósito: testar rápido,
              reduzir risco e{' '}
              <Box as="span" color="purple.300" fontWeight="semibold">
                aprender no curto prazo
              </Box>{' '}
              para ganhar no longo.
            </Text>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="whiteAlpha.800"
              textAlign="justify"
            >
              A Nidus é a intersecção entre{' '}
              <Box as="span" color="cyan.300" fontWeight="semibold">
                design, engenharia e automação
              </Box>
              . Nosso ambiente é de laboratório — silencioso, técnico, focado —
              onde ideias são refinadas até virarem sistemas{' '}
              <Box as="span" color="purple.300" fontWeight="semibold">
                modernos e escaláveis
              </Box>
              . Se a sua empresa precisa crescer com consistência, nós somos o
              time que constrói esse caminho, do{' '}
              <Box as="span" color="cyan.300" fontWeight="semibold">
                conceito ao deploy
              </Box>
              .
            </Text>
          </VStack>
        </Stack>
      </Box>
    </Main>
  );
}
