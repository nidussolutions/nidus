'use client';

import { Flex, Heading, Text, VStack } from '@chakra-ui/react';

export default function NidusPage() {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgGradient="linear(to-br, pink.500, purple.700, cyan.500)"
    >
      <VStack spacing={6} textAlign="center">
        <Heading
          size="4xl"
          fontWeight="extrabold"
          color="white"
          textShadow="0 0 25px rgba(255,255,255,0.9)"
        >
          NIDUS
        </Heading>
        <Text
          fontSize="xl"
          color="whiteAlpha.900"
          maxW="lg"
          textShadow="0 0 10px rgba(0,0,0,0.6)"
        >
          Está para nascer o berço de novas ideias. O nascimento de um espaço
          para criar, inovar e transformar.
        </Text>
      </VStack>
    </Flex>
  );
}
