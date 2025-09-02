'use client';

import { Flex, Heading, Text, VStack, Link, Icon } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';

export default function NidusPage() {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgGradient="linear(to-br, pink.500, purple.700, cyan.500)"
      direction="column"
      textAlign="center"
      p={6}
    >
      <VStack spacing={6}>
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

        <Link
          href="https://instagram.com/nidus.code"
          target="_blank"
          fontSize="lg"
          fontWeight="bold"
          color="white"
          _hover={{ textDecoration: 'none', color: 'pink.300' }}
          display="flex"
          alignItems="center"
          gap={2}
        >
          @nidus.code
        </Link>
      </VStack>
    </Flex>
  );
}
