'use client';

import { Stack, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function CTAButtons({
  whatsappHref = 'https://wa.me/5527998558425',
  instagramHref = 'https://instagram.com/nidus.code',
}) {
  return (
    <Stack
      spacing={{ base: 3, md: 4 }}
      pt={5}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
    >
      <Button
        as={Link}
        href={whatsappHref}
        target="_blank"
        size="lg"
        rounded="full"
        px={{ base: 6, md: 8 }}
        h={{ base: 12, md: 14 }}
        fontWeight="semibold"
        bgGradient="linear(to-r, cyan.400, purple.500)"
        _hover={{ opacity: 0.95, transform: 'translateY(-2px)' }}
        _active={{ transform: 'translateY(-1px)' }}
        letterSpacing="0.05em"
        transition="all .2s ease"
      >
        Fale com a Nidus
      </Button>

      <Button
        as={Link}
        href={instagramHref}
        size="lg"
        rounded="full"
        target="_blank"
        px={{ base: 6, md: 8 }}
        h={{ base: 12, md: 14 }}
        variant="outline"
        borderColor="whiteAlpha.400"
        color="whiteAlpha.900"
        letterSpacing="0.05em"
        _hover={{ bg: 'whiteAlpha.100' }}
      >
        Acesse o Instagram
      </Button>
    </Stack>
  );
}
