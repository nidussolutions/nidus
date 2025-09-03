import { Box, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import Logo from '../Logo';

const HeaderAbout = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '350px 1fr' }}
      gap={{ base: 6, md: 10 }}
      alignItems="center"
      justifyContent="center"
      textAlign={{ base: 'center', md: 'left' }} // centraliza texto no mobile
    >
      <GridItem>
        <Logo style={{ margin: '0 auto' }} /> {/* centraliza logo */}
      </GridItem>

      <GridItem>
        <VStack
          spacing={2}
          align={{ base: 'center', md: 'start' }} // centraliza conteúdo no mobile
        >
          <Text
            maxW="2xl"
            fontSize={{ base: '0.95rem', md: 'xl' }}
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
            fontSize={{ base: '0.95rem', md: 'xl' }}
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
  );
};

export default HeaderAbout;
