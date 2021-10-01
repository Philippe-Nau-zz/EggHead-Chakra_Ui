import { Container, Flex, VStack } from "@chakra-ui/layout"
import Cart from "../src/sections/cart"
import Details from "../src/sections/details"

const HomePage = () =>
  <Container maxW="container.xl" p={0}>
    <Flex
      h={{ base: 'auto', md: '100vh' }}
      py={[0, 10, 20]}
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>

export default HomePage