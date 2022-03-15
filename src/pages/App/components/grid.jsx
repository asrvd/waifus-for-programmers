import { SimpleGrid, Box } from '@chakra-ui/react'
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
                className="gallery-img"
                small={item.url}
                large={item.url}
                alt={item.name}
            />
        )
        
    })
    return (
        <Box
        padding={2}
        className='gallery-cont'
        w="100%"
        maxW="900px"
        mx="auto"
        bg="gray.800"
        sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
        >
            {ims}
        </Box>
    )
}