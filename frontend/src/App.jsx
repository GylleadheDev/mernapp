import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Box bg="bg.primary" minH="100vh">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App