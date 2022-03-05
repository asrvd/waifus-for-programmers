import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './pages/App/App'
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../utils/theme'
import Hero from './pages/Home/Hero'
import '@fontsource/inter/800.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
)
