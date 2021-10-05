import { HStack, Text, Heading } from "@chakra-ui/react"

const CartRow = ({ textColor, text, textValue, size='sm'} : {
    textColor?: string;
    text?: string;
    textValue?: string;
    size?: 'sm'|'md'|'lg';
}) => {
    return <HStack justifyContent="space-between">
        <Text color={textColor}>{text}</Text>
        <Heading size={ size }>{textValue}</Heading>
    </HStack>
}

export default CartRow;