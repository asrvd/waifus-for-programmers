import { SimpleGrid, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getauthor } from '../utils/api'
import { Component } from "react";
import ModalImage from "react-modal-image";

export default class MainGrid extends Component {
    constructor(props) {
        super(props);
    }
    
    // Credits: @TheRealDust
    componentDidUpdate() {
        const images = Array.from(document.querySelectorAll(".img"));

        // Apply skeleton to all image containers
        images.map((image) => image.parentNode).filter((container) => !container.classList.contains("skeleton")).map((container) => container.classList.add("skeleton"));

        // Once all images are loaded remove the `hidden` class to display them
        Promise.all(images.map((image) => new Promise((resolve) => image.onload = resolve))).then(() =>
            images.map((image) => {
                image.classList.remove("hidden");
                // Remove skeleton from container element
                image.parentNode.classList.remove("skeleton");
            })
        );
    }

    render() {
        const data = this.props.data
        const ims = data.map(item =>
            <ModalImage
                className="img hidden"
                small=`https://cdn.statically.io/img/${item.url.substring(8)}`
                large=`https://cdn.statically.io/img/${item.url.substring(8)}`
                alt={item.name}
                key={item.key}
            />
        );

        return (
            <Box
                className='grid-box'
                w="100%"
                mx="auto"
                bg="gray.800"
                sx={{ columnCount: [1, 2, 3], columnGap: "15px" }}
            >
                {ims}
            </Box>
        )
    }
}
