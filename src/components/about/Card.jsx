import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Link,
  HStack,
  VStack,
  Badge,
} from '@chakra-ui/react';

import Divider from '../Divider';

export default function CardPerson({
  name,
  role,
  image,
  description,
  instagram,
  github,
  quote,
}) {
  return (
    <Box mx="auto" w={{ base: '100%', md: '520px' }} mb={8} h="100%">
      <Box
        bgGradient="linear(to-r, cyan.400, purple.400)"
        p="1px"
        rounded="2xl"
        transition="all 200ms ease"
        _hover={{ transform: 'translateY(-2px)' }}
        h="100%"
      >
        <Box
          bg="rgba(17, 19, 26, 0.7)"
          backdropFilter="auto"
          backdropBlur="6px"
          rounded="2xl"
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          px={{ base: 5, md: 8 }}
          py={{ base: 6, md: 8 }}
          boxShadow="xl"
          textAlign="center"
          h="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            mx="auto"
            mb={4}
            w={{ base: '104px', md: '132px' }}
            h={{ base: '104px', md: '132px' }}
            rounded="full"
            p="2px"
            bgGradient="linear(to-r, cyan.300, purple.300)"
          >
            <Image
              src={image}
              alt={name}
              w="100%"
              h="100%"
              rounded="full"
              objectFit="cover"
              borderWidth="2px"
              borderColor="blackAlpha.700"
              fallbackSrc="https://via.placeholder.com/150?text=Nidus"
            />
          </Box>

          <VStack spacing={1}>
            <Heading
              as="h3"
              fontSize={{ base: '1.15rem', md: '1.5rem' }}
              color="whiteAlpha.900"
              lineHeight="1.2"
            >
              {name}
            </Heading>

            {role && (
              <Badge
                colorScheme="purple"
                variant="subtle"
                bg="purple.600"
                color="white"
                rounded="full"
                px={3}
                py={1}
                fontWeight="medium"
                fontSize={{ base: '0.65rem', md: '0.75rem' }}
              >
                {role}
              </Badge>
            )}
          </VStack>

          {quote && (
            <Text
              mt={3}
              fontSize={{ base: '0.8rem', md: '0.9rem' }}
              color="whiteAlpha.700"
              fontStyle="italic"
              lineHeight="1.5"
            >
              “{quote}”
            </Text>
          )}

          <Divider my={{ base: 4, md: 5 }} borderColor="whiteAlpha.300" />

          <Box textAlign="left" flex="1">
            <Text
              fontSize={{ base: '0.9rem', md: '1rem' }}
              color="whiteAlpha.900"
              lineHeight="1.7"
            >
              {description}
            </Text>
          </Box>

          <HStack
            spacing={3}
            mt={{ base: 5, md: 6 }}
            justify="center"
            wrap="wrap"
          >
            {instagram && (
              <Button
                as={Link}
                target="_blank"
                href={instagram}
                isExternal
                aria-label="Instagram"
                variant="outline"
                colorScheme="pink"
                borderColor="pink.400"
                _hover={{
                  bg: 'pink.600',
                  color: 'white',
                  borderColor: 'pink.600',
                }}
                size="sm"
              >
                Instagram
              </Button>
            )}

            {github && (
              <Button
                as={Link}
                href={github}
                isExternal
                target="_blank"
                aria-label="GitHub"
                variant="outline"
                colorScheme="gray"
                borderColor="whiteAlpha.400"
                _hover={{ bg: 'gray.700', color: 'white' }}
                size="sm"
              >
                GitHub
              </Button>
            )}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
