'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Stack,
  Image,
  IconButton,
  Collapsible,
  useDisclosure,
  HStack,
  Text,
} from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/about' },
];

const LOGO_DARK = '/logo-dark.png';

function Logo() {
  return (
    <Link href="/" aria-label="NIDUS - Início">
      <HStack spacing={3}>
        <Image src={LOGO_DARK} alt="NIDUS" boxSize={['28px', '36px', '40px']} />
        <Text
          display={['none', 'block']}
          fontFamily="edosz"
          letterSpacing="0.18em"
          fontSize={['xs', 'sm']}
          color="whiteAlpha.900"
          textTransform="uppercase"
        >
          Nidus
        </Text>
      </HStack>
    </Link>
  );
}

function NavLink({ href, children, isActive }) {
  const color = 'whiteAlpha.900';
  const hover = 'cyan.300';
  const underline = isActive ? 1 : 0;

  return (
    <Box
      as={Link}
      href={href}
      position="relative"
      px={2}
      py={1}
      fontWeight={500}
      color={color}
      _after={{
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '-4px',
        height: '2px',
        bgGradient: 'linear(to-r, cyan.400, purple.500)',
        transform: `scaleX(${underline})`,
        transformOrigin: 'left',
        transition: 'transform .25s ease',
      }}
      _hover={{ color: hover, _after: { transform: 'scaleX(1)' } }}
    >
      {children}
    </Box>
  );
}

function DesktopNav() {
  const pathname = usePathname();
  return (
    <HStack as="nav" spacing={4}>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          isActive={pathname === item.href}
        >
          {item.label}
        </NavLink>
      ))}
    </HStack>
  );
}

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container maxW="container.xl" py={2}>
      <Stack direction="row" align="center" justify="space-between">
        <Logo />

        <Box>
          <DesktopNav />
        </Box>
      </Stack>
    </Container>
  );
}
