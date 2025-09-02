import Main from '@/components/Main';
import Logo from '@/components/Logo';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import ServiceChips from '@/components/ServiceChips';
import CTAButtons from '@/components/CTAButtons';

export default function NidusPage() {
  return (
    <Main>
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        rounded={{ base: 'none', md: '3xl' }}
        pt={{ base: 6, md: 10 }}
        mb={{ base: 4, md: 6 }}
        bgGradient="linear(to-b, rgba(10,12,18,.9), rgba(14,16,22,.7))"
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bgGradient:
            'radial( at 20% 10%, rgba(0, 200, 255, .18) 0%, transparent 40% ), radial( at 80% 30%, rgba(168, 85, 247, .20) 0%, transparent 45% )',
        }}
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }}
      >
        <Stack
          spacing={{ base: 6, md: 8 }}
          align="center"
          textAlign="center"
          position="relative"
        >
          <Heading
            as="h1"
            lineHeight="1.2"
            letterSpacing={{ base: '0.18em', md: '0.22em' }}
            fontSize={{ base: '1.5rem', md: '3.5rem' }}
            fontFamily="edosz"
            color="whiteAlpha.900"
            textTransform="uppercase"
          >
            Bem-vindo à
          </Heading>

          <Box aria-label="Logomarca NIDUS">
            <Logo />
          </Box>

          <Text
            maxW="3xl"
            fontSize={{ base: 'lg', md: '2xl' }}
            color="whiteAlpha.800"
            mt={-3}
            px={{ base: 4, md: 6 }}
            pb={{ base: 2, md: 4 }}
          >
            Do conceito ao deploy: sites, sistemas e automações para acelerar o
            crescimento do seu negócio.
          </Text>

          <ServiceChips />

          <CTAButtons />

          <Text fontSize="sm" color="whiteAlpha.700" px={4} py={2}>
            + resultados, – fricção. Tecnologia com propósito.
          </Text>
        </Stack>
      </Box>
    </Main>
  );
}
