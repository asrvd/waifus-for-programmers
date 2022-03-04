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
    const data = props.data
    const handleclick = (path) => {
        //console.log(path);
        getcont(path)
        .then(data => {
            setCurrent(data)
        })
    }
    //console.log(typeof data)
    const list = data.map(item => {
        if (item.name.slice(-3) != ".md") {
            return (
                // <li id={item.name} onClick={() => handleclick(item.path)}>{item.name}</li>
                <MenuItem id={item.name} onClick={() => handleclick(item.path)}>{item.name}</MenuItem>
            )
        }
    })
    return (
        <div className="main">
            <div className="main-nav">
                <Menu matchWidth="true">
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Languages
                    </MenuButton>
                    <MenuList>
                        {list}
                    </MenuList>
                </Menu>
            </div>
            <div className="main-grid">
                <MainGrid
                    data={Current}
                />
            </div>
        </div>
    )
}