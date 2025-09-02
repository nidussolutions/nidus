'use client';

import { Center, Container } from '@chakra-ui/react';

export default function Main({ children }) {
  return (
    <Center flexDirection="column">
      <Container maxW="container.xl" py={8}>
        {children}
      </Container>
    </Center>
  );
}
