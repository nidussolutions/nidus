import { Box, Text, VStack } from '@chakra-ui/react';

const TextAbout = () => {
  return (
    <VStack spacing={5} align="stretch" pb={6}>
      <Text
        fontSize={{ base: '0.9rem', md: 'xl' }}
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
        estratégia e executamos em ciclos rápidos, sempre medindo impacto e
        aprendendo com dados reais.
      </Text>
    </VStack>
  );
};

export default TextAbout;
