import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/nav'
import {getfolders, getcont} from './utils/api.js'
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0)
  const [Folders, setFolders] = useState([])
  const [Files, setFiles] = useState({})

  useEffect(() => {
    //setFolders({})
    getfolders().then(data => {setFolders(data)})
  }, [])

  return (
    <div className="App">
      <Nav
        data={Folders}
      />
    </div>
  )
}

export default App
