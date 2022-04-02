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
        const applyClassToContainer = name => images.map((image) => image.parentNode).filter((container) => !container.classList.contains(name)).map((container) => container.classList.add(name));

        applyClassToContainer("skeleton");
        applyClassToContainer("imageContainer");

        // Wait for all images to be loaded
        Promise.all(images.map((image) => new Promise((resolve) => image.onload = resolve))).then(async () => {
            // Fetch author data 
            const authors = await Promise.all(this.props.data.map((data) => data.author));
            // Patch live author data into data props
            const patchedData = this.props.data.map((data, i) => {
                const d = data;
                d.author = authors[i];
                return d;
            });

            images.map((image) => {
                // Once all images are loaded remove the `hidden` & `skeleton` classes
                image.classList.remove("hidden");
                image.parentNode.classList.remove("skeleton");

                // Find the data packet for this image
                const data = patchedData.find(element => image.src == element.url);
                // Display author over image
                const authorDiv = document.createElement("div");
                authorDiv.innerText = `@${data.author}`;
                authorDiv.className = "authorDiv";
                image.parentNode.appendChild(authorDiv);
            });
        });
    }

    render() {
        const data = this.props.data
        const ims = data.map(item =>
            <ModalImage
                className="img hidden"
                small={item.url}
                large={item.url}
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
