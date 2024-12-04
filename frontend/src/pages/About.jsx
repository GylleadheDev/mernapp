import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

export default function About() {
  return (
    <Container maxW="4xl" py={10}>
      <VStack spacing={6} align="start">
        <Heading color="text.primary">About Product Store</Heading>
        <Text color="text.secondary" fontSize="lg">
          Welcome to Product Store, your one-stop destination for high-quality tech products. 
          We specialize in providing the latest and most innovative technology solutions to meet your needs.
        </Text>
        <Text color="text.secondary" fontSize="lg">
          Our store features a carefully curated selection of products, from gaming equipment to professional gear. 
          Each item is selected based on quality, performance, and value for money.
        </Text>
        <Box bg="bg.secondary" p={6} borderRadius="lg" w="full">
          <Heading size="md" color="accent.purple" mb={4}>Our Mission</Heading>
          <Text color="text.secondary">
            To provide our customers with the best tech products while ensuring an exceptional shopping experience 
            through outstanding service and support.
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}