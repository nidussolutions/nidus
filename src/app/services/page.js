import Main from '@/components/Main';
import { Box } from '@chakra-ui/react';

export default function NidusPage() {
  return (
    <Main>
      <Box as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
        Serviços
      </Box>
      <Box as="p" fontSize="lg">
        Bem-vindo à página de serviços do NIDUS. Aqui você encontrará uma
        variedade de serviços que oferecemos para apoiar a inovação e o
        desenvolvimento de projetos. Explore nossas ofertas e descubra como
        podemos ajudar você a alcançar seus objetivos.
      </Box>
    </Main>
  );
}
