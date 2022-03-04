import { SimpleGrid } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getauthor } from '../utils/api'

export default function MainGrid(props) {
    //console.log(props.data)
    const data = props.data
    //console.log(data)
    const ims = data.map(item => {
        return (
            <div className='image-card'>
                <img src={item.url} alt={item.name} width="500px" height="300px"/>
                <span className='image-credit'>by <a href="">@{item.author}</a></span>
            </div>
        )
        
    })
    return (
        <SimpleGrid columns={2} spacing={10}>
            {ims}
        </SimpleGrid>
    )
}