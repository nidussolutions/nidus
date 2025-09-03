import Main from '@/components/Main';
import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Stack,
  Button,
  AspectRatio,
  Badge,
} from '@chakra-ui/react';

const portfolioItems = [
  {
    name: 'Rara Flor Orquídeas',
    logo: '/assets/raraflor.jpg',
    site: 'https://raraflororquideas.com/',
    description: `Projeto desenvolvido para a Rara-Flor, um e-commerce focado na venda de orquídeas raras e exclusivas, pensado para entusiastas e colecionadores.
O site foi construído sobre um CMS de fácil gerenciamento, permitindo controle ágil de produtos, pedidos e promoções.
A identidade visual foi criada para transmitir sofisticação e conexão com a natureza: a logo combina o verde da flora com o sol nascente e flores delicadas, representando o cuidado e a beleza das espécies oferecidas.`,
    tags: ['E-commerce', 'Identidade Visual'],
  },
];

export default function WorkPage() {
  return (
    <Main>
      <Box
        as="section"
        position="relative"
        px={{ base: 4, md: 10 }}
        py={{ base: 8, md: 12 }}
        maxW="7xl"
        mx="auto"
        bgGradient="linear(to-b, rgba(10,12,18,.82), rgba(14,16,22,.66))"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          pointerEvents: 'none',
          rounded: { base: '2xl', md: '3xl' },
        }}
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        rounded={{ base: '2xl', md: '3xl' }}
      >
        <Heading
          color="whiteAlpha.900"
          mb={{ base: 6, md: 8 }}
          letterSpacing="1px"
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          Portfólio
        </Heading>

        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 5, md: 7 }}
        >
          {portfolioItems.map((item, i) => (
            <LinkBox
              key={i}
              role="group"
              rounded="2xl"
              p="1px"
              bgGradient="linear(to-br, rgba(255,255,255,.15), rgba(255,255,255,.03))"
              _hover={{ filter: 'brightness(1.02)' }}
              transition="0.25s ease"
            >
              <Box
                bg="rgba(17,20,27,.85)"
                rounded="2xl"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                overflow="hidden"
                transition="0.25s ease"
              >
                <Box bg="whiteAlpha.50" p={4}>
                  <AspectRatio ratio={8 / 4}>
                    <Image
                      src={item.logo}
                      alt={item.name}
                      objectFit="cover"
                      objectPosition="center 20%"
                      rounded={'xl'}
                      mx="auto"
                      mb={4}
                    />
                  </AspectRatio>
                </Box>

                <Stack spacing={3} p={{ base: 5, md: 6 }}>
                  <Heading
                    size="md"
                    color="whiteAlpha.900"
                    lineHeight="1.2"
                    noOfLines={2}
                    mb={3}
                  >
                    {item.name}
                  </Heading>

                  {item.tags?.length ? (
                    <Stack direction="row" flexWrap="wrap" gap={2} mb={2}>
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          rounded="full"
                          px={3}
                          py={1}
                          borderWidth="1px"
                          borderColor="whiteAlpha.300"
                          bg="whiteAlpha.100"
                          color="whiteAlpha.800"
                          fontWeight="medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </Stack>
                  ) : null}

                  <Text
                    fontSize={{ base: 'sm', md: 'sm' }}
                    color="whiteAlpha.800"
                    noOfLines={{ base: 6, md: 5 }}
                    textAlign="left"
                  >
                    {item.description}
                  </Text>

                  <Button
                    as="a"
                    href={item.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    mt={1}
                    alignSelf="flex-start"
                    variant="outline"
                    borderColor="cyan.300"
                    color="cyan.200"
                    _hover={{ bg: 'cyan.300', color: '#0b0e15' }}
                  >
                    Visitar site
                  </Button>
                </Stack>
              </Box>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Box>
    </Main>
  );
}
