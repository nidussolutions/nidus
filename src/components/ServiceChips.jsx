'use client';

import { HStack, Badge } from '@chakra-ui/react';

const DEFAULT = [
  'Websites & Landing Pages',
  'Sistemas sob medida',
  'Integrações & APIs',
  'Automação de processos',
  'Cloud & DevOps',
];

export default function ServiceChips({ items = DEFAULT }) {
  return (
    <HStack
      spacing={3}
      wrap="wrap"
      justify="center"
      opacity={0.95}
      px={4}
      py={2}
    >
      {items.map((label) => (
        <Badge
          key={label}
          size="lg"
          variant="subtle"
          colorScheme="purple"
          px={4}
          py={2}
          rounded="full"
          bg="whiteAlpha.100"
          borderWidth="1px"
          borderColor="whiteAlpha.200"
        >
          {label}
        </Badge>
      ))}
    </HStack>
  );
}
