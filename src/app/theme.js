import { createSystem, defaultConfig } from '@chakra-ui/react';

const system = createSystem(
  {
    ...defaultConfig,
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  {
    theme: {
      tokens: {
        fonts: {
          heading: { value: 'edosz, system-ui, sans-serif' },
          body: { value: 'edosz, system-ui, sans-serif' },
        },
      },
    },
  }
);

export default system;
