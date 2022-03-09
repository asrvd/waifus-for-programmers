import { getcont } from "../utils/api";
import MainGrid from "./grid";
import './nav.css'
import { useState, useEffect } from "react";
import { PhoneIcon, AddIcon, WarningIcon, ChevronDownIcon, StarIcon } from '@chakra-ui/icons'
import { FaGithub, FaDiscord, FaStar } from 'react-icons/fa'
import { AiOutlineSearch } from "react-icons/ai"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Flex,
    Icon,
    HStack,
    Heading
  } from '@chakra-ui/react'

export default function Nav(props) {
    const [Current, setCurrent] = useState([])
    const [Lang, setLang] = useState([])
    const [Title, setTitle] = useState("Languages")
    const data = props.data
    useEffect(() => {
        setTitle("Rust");
        getcont("Rust")
        .then(data => {
            setCurrent(data)
            setLang(data)
        })
    }, [])
    const handleChange = (e) => {
        if (e.key === "Enter") {
            var curr = Lang.filter((el) => {
                if (el.name.toLowerCase().includes(e.target.value.toLowerCase()) && e.target.value !== " ") {
                    //console.log(e.target.value)
                    return el
                    //setCurrent([el])
                }
            })
            setCurrent(curr)
        }
    }
    const handleclick = (path, name) => {
        //console.log(path);
        setTitle(name);
        getcont(path)
        .then(data => {
            setCurrent(data)
            setLang(data)
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
                    <div className="search-bar">
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                            <AiOutlineSearch />
                            </InputLeftElement>
                            <Input 
                                type="tel" 
                                placeholder="Search..."
                                onKeyPress={(e) => handleChange(e)}
                                width="100%" 
                            />
                        </InputGroup>
                    </div>
                    <HStack spacing='15px' className="nav-head">
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