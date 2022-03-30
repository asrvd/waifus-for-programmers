import { SimpleGrid, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getauthor } from '../utils/api'
import { Component } from "react";
import ModalImage from "react-modal-image";

export default class MainGrid extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        const images = Array.from(document.querySelectorAll(".img"));

        // Once all images are loaded remove the `noVis` class to display them
        Promise.all(images.map((image) => new Promise((resolve) => image.onload = resolve))).then(() => {
            images.map((image) => image.classList.remove("noVis"));
            // this.props.onload();
        });
    }

    render() {
        //console.log(props.data)
        const data = this.props.data
        //console.log(data)
        const ims = data.map(item => {
            // console.log('test');
            return (
                <ModalImage
                    className="img noVis"
                    small={item.url}
                    large={item.url}
                    alt={item.name}
                    key={item.key}
                />
            )
        });
        return (
            // <SimpleGrid columns={2} spacing={10} overflowY='scroll' h="100%" paddingRight={'10%'}>
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
