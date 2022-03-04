import { SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'

export default function MainGrid(props) {
    //console.log(props.data)
    const data = props.data
    const ims = data.map(item => {
        return (
            <img src={item.url} alt={item.name} width="500px" height="300px"/>
        )
    })
    return (
        <SimpleGrid columns={2} spacing={10}>
            {ims}
        </SimpleGrid>
    )
}