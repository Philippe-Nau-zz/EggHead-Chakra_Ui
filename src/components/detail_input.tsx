import { GridItem, FormControl, FormLabel, Input } from "@chakra-ui/react";

const DetailInput = ({label, placeholder, col = 1} : {
    label?: string;
    placeholder?: string;
    col: number;
}) => {
    return <GridItem colSpan={ col }>
    <FormControl>
        <FormLabel>
            { label }
        </FormLabel>
        <Input placeholder = { placeholder }/>
    </FormControl>
</GridItem>
}

export default DetailInput;