import { getcont } from "../utils/api";
import MainGrid from "./grid";
import './nav.css'
import { useState, useEffect } from "react";
import { PhoneIcon, AddIcon, WarningIcon, ChevronDownIcon, StarIcon } from '@chakra-ui/icons'
import { FaGithub, FaDiscord, FaStar } from 'react-icons/fa'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Flex,
    Icon,
    HStack,
    Heading
  } from '@chakra-ui/react'

export default function Nav(props) {
    const [Current, setCurrent] = useState([])
    const [Curr, setCurr] = useState()
    const [Title, setTitle] = useState("Languages")
    const data = props.data
    const handleclick = (path, name) => {
        //console.log(path);
        setTitle(name);
        getcont(path)
        .then(data => {
            setCurrent(data)
        })
        window.scrollTo(0, 0)
    }
    //console.log(typeof data)
    const list = data.map(item => {
        if (item.name.slice(-3) != ".md") {
            return (
                // <li id={item.name} onClick={() => handleclick(item.path)}>{item.name}</li>
                <MenuItem id={item.name} onClick={() => handleclick(item.path, item.name)}>{item.name}</MenuItem>
            )
        }
    })
    return (
        <div className="main">
            <div className="main-nav">
                <Menu matchWidth="true">
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        {Title}
                    </MenuButton>
                    <MenuList className="nav-list" h='100vh' overflowY='scroll'>
                        {list}
                    </MenuList>
                </Menu>
            </div>
            <div className="main-grid">
                <div className="navbar">
                    <HStack spacing='15px'>
                        <h3>Waifus for Programmers.</h3>
                        <a href="https://github.com/asheeeshh/waifus-for-programmers" target="blank"><Icon as={ FaGithub } w='20px' h="20px" color="gray.300" cursor={'pointer'}/></a>
                        <a href="https://discord.com/users/784363251940458516" target="blank"><Icon as={ FaDiscord } w='20px' h="20px" color="gray.300" cursor={'pointer'}/></a>
                        <a href="https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books" target="blank"><Icon as={ FaStar } w='20px' h="20px" color="gray.300" cursor={'pointer'}/></a>
                    </HStack>
                </div>
                <div className="gallery">
                    <MainGrid
                        data={Current}
                    />
                </div>
            </div>
        </div>
    )
}