import { SimpleGrid } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getauthor } from '../utils/api'
import ModalImage from "react-modal-image";

export default function MainGrid(props) {
    //console.log(props.data)
    const data = props.data
    //console.log(data)
    const ims = data.map(item => {
        return (
            <ModalImage
                small={item.url}
                large={item.url}
                alt={item.name}
            />
        )
        
    })
    return (
        <SimpleGrid columns={2} spacing={10} overflowY='scroll' h="100%" paddingRight={'5px'}>
            {ims}
        </SimpleGrid>
    )
}