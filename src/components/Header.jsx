import { Stack, Box, Container, Image } from '@chakra-ui/react';
import { useColorModeValue } from './ui/color-mode';

const NAV_ITEMS = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/about' },
];

const LOGO_DARK = '/logo-dark.png';
const LOGO_LIGHT = '/logo-light.png';

const Logo = () => {
  const logoSrc = useColorModeValue(LOGO_LIGHT, LOGO_DARK);
  return <Image src={logoSrc} boxSize={['20px', '50px', '60px']} />;
};

const NavItens = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as="a"
            p={2}
            href={navItem.href ?? '#'}
            fontSize={['md', 'md', 'lg', 'lg']}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const Header = () => {
  return (
    <Container
      maxW="full"
      py={2}
      as="header"
      role="banner"
      boxShadow={['sm', 'sm', 'md', 'md']}
    >
      <Container maxW="container.xl" justifyContent={'center'}>
        <Stack direction={'row'} justify={'space-between'} align={'center'}>
          <Logo />
          <NavItens />
        </Stack>
      </Container>
    </Container>
  );
};

export default Header;
