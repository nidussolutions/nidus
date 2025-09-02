'use client';

import { VStack, Text, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <VStack spacing={1} mt={8} mb={8} position="relative">
      <Text fontSize="xs" color="whiteAlpha.600">
        © {new Date().getFullYear()} Nidus. Todos os direitos reservados.
      </Text>
    </VStack>
  );
}
