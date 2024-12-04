import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { tokyoNightColors } from './theme/colors'
import './index.css'

const theme = extendTheme({
  colors: tokyoNightColors,
  styles: {
    global: {
      body: {
        bg: 'bg.primary',
        color: 'text.primary'
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)