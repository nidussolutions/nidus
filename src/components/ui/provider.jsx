'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';
import system from '@/app/theme';

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
