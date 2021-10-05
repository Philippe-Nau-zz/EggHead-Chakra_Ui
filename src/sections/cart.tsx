import {
    VStack,
    HStack,
    Heading,
    Text,
    AspectRatio,
    Stack,
    Divider,
    Button,
    Image,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

import CartRow from "../components/cart_row";

const Cart = () => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
    const secondaryColor = useColorModeValue("gray.600", "gray.400");

    return <VStack w="full"
        h="full"
        p={10}
        spacing={6}
        alignItems="flex-start"
        backgroundColor={bgColor}
    >
        <VStack alignItems="flex-start" spacing={3}>
            <Heading size="2xl">Your cart</Heading>
            <Text>If the price is too hard on your eyes,{' '}
                <Button onClick={ toggleColorMode } variant="link" colorScheme="black">try changing the name</Button>
            </Text>
        </VStack>
        <HStack spacing={6} alignItems="Center" w="full">
            <AspectRatio ratio={1} w={24}>
                <Image src="/images/skateboard.jpg" alt="Skateboard" />
            </AspectRatio>
            <Stack
                spacing={0}
                w="full"
                direction={"row"}
                justifyContent="space-between"
                alignItems="center"
            >
                <VStack w="full" spacing={0} alignItems="flex-start">
                    <Heading size="md">Penny board</Heading>
                    <Text color= { secondaryColor }>PNYCOMP27541</Text>
                </VStack>
                <Heading size="sm" textAlign="end">
                    $119.00
                </Heading>
            </Stack>
        </HStack>
        <VStack spacing={4} alignItems="stretch" w="full">
            <CartRow textColor={ secondaryColor } text='Subtotal' textValue='$119.00'/>
            <CartRow textColor={ secondaryColor } text='Shipping' textValue='$19.99'/>
            <CartRow textColor={ secondaryColor } text='Taxes (estimated)' textValue='$23.80'/>
            <Divider/>
            <CartRow textColor={ secondaryColor } text='Total' textValue='$162.79' size='md'/>
        </VStack>
    </VStack>
}

export default Cart;