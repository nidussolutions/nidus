import Main from '@/components/Main';
import { Box, Stack, Heading } from '@chakra-ui/react';

import TextAbout from '@/components/about/TextAbout';
import HeaderAbout from '@/components/about/HeaderAbout';
import Divider from '@/components/Divider';
import Card from '@/components/about/Card';

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
        rounded={{ base: '2xl', md: '3xl' }}
      >
        <Stack spacing={{ base: 8, md: 12 }} position="relative">
          <Heading
            as="h1"
            lineHeight="1.15"
            letterSpacing={{ base: '0.18em', md: '0.22em' }}
            fontSize={{ base: '1.5rem', md: '2.8rem' }}
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

          <HeaderAbout />

          <Divider my={{ base: 2, md: 6 }} mt={{ base: 1, md: -6 }} />

          <TextAbout />

          <Divider my={{ base: 2, md: 6 }} mt={{ base: -3, md: -6 }} />

          <Stack spacing={{ base: 6, md: 10 }} mb={8}>
            <Heading
              as="h2"
              fontSize={{ base: '1.25rem', md: '2xl' }}
              fontFamily="edosz"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="whiteAlpha.900"
              textAlign="center"
              mb={4}
            >
              Quem está à frente da NIDUS?
            </Heading>

            <Stack
              justify="center"
              direction={{ base: 'column', md: 'row' }}
              gap={{ base: 0, md: 8 }}
              px={{ base: 4, md: 0 }}
            >
              <Card
                name="João Gustavo Bispo"
                role="Fundador e Desenvolvedor"
                description={`Com 25 anos, João iniciou sua trajetória no setor público aos 19. Desde os 17 integra a Ordem DeMolay, onde exerceu funções de liderança e hoje atua como sênior, reforçando valores de disciplina e compromisso social. Cofundador da Nidus, carrega a visão de unir desenvolvimento, design e estratégia para criar soluções digitais autênticas, apostando em uma estética underground e vibrante, que foge do minimalismo frio e sem vida.`}
                image="https://avatars.githubusercontent.com/u/189302553?v=4"
                github="https://github.com/jgbiispo"
                instagram="https://www.instagram.com/jgbiispo"
                quote={`Liderar é transformar ideias em caminhos reais, onde criatividade e propósito andam juntos.`}
              />

              <Card
                name="Thiago Viana"
                role="Fundador e Social Media"
                description={`Aos 24 anos, Thiago construiu uma jornada marcada pela criatividade e pelo engajamento social. Sempre ligado ao desenho, à música e à tecnologia, encontrou nessas áreas um meio de expressão que se reflete em sua atuação profissional. Com experiência em vendas e comunicação, uniu forças com João para fundar a Nidus, trazendo consigo a visão de que tecnologia e design devem ser próximos das pessoas: vivos, autênticos e capazes de gerar impacto real para pequenos negócios.`}
                image="/thiago.png"
                instagram="https://www.instagram.com/thiagovc01"
                quote={`A comunicação verdadeira nasce quando tecnologia e pessoas se encontram de forma autêntica.`}
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Main>
  );
}
