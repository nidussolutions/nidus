'use client';

import { Image } from '@chakra-ui/react';

const LOGO_DARK = '/logo-dark.gif';

export default function Logo(props) {
  return (
    <Image
      mt={-4}
      src={LOGO_DARK}
      alt="NIDUS"
      boxSize={['200px', '250px', '400px']}
      {...props}
    />
  );
}
