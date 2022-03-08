import {
    InputGroup,
    InputLeftElement,
    Input,
    chakra
} from "@chakra-ui/react"

import { AiOutlineSearch } from "react-icons/ai"

export default function Search() {
    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none">
            <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search..." />
        </InputGroup>
    )
}