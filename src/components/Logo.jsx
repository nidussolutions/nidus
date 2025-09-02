'use client';

import { Image } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

const LOGO_DARK = '/logo-dark.gif';
const LOGO_LIGHT = '/logo-light.gif';

export default function Logo(props) {
  const logoSrc = useColorModeValue(LOGO_LIGHT, LOGO_DARK);
  return (
    <Image
      mt={-4}
      src={logoSrc}
      alt="NIDUS"
      boxSize={['200px', '250px', '400px']}
      {...props}
    />
  );
}
