import { getcont } from "../utils/api";
import MainGrid from "./grid";
import './nav.css'
import { useState, useEffect } from "react";
import { PhoneIcon, AddIcon, WarningIcon, ChevronDownIcon } from '@chakra-ui/icons'
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
                    <p>
                        <samp>
                            <a href="http://waifus-for-programmers.vercel.app/">Waifus for Programmers!</a> .
                            <a href="https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books" target='blank'> A Web Viewer made for Anime Girls Holding Programming Books</a> .
                            <a href="https://github.com/asheeeshh/waifus-for-programmers" target='blank'> ⭐ on GitHub</a>
                        </samp>
                    </p>
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