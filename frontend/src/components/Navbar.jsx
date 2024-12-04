import { Box, Button, Flex, Heading, Icon, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiInfo, FiPackage } from 'react-icons/fi'
import {FaHome} from 'react-icons/fa'
import { MdAddCircleOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import AddProductModal from './AddProductModal'

export default function Navbar() {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="navbar px-10 md:p-4 m-auto  flex flex-col items-center justify-around gap-4 scale-[0.8] md:scale-100 ">
     
      <div className="mt-2 flex flex-row gap-2">
      <Button
          leftIcon={<Icon as={FiPackage} />}
          bg={'#fff'}
          color="text.alternative"
          fontWeight={'bold'}
          _hover={{ bg: '#00d1d8' }}
          onClick={onOpen}
        >
          Add
        </Button>

        <Button
          leftIcon={<Icon as={FiPackage} />}
          variant="ghost"
          bg={'#fff'}
          color="text.alternative"
          fontWeight={'bold'}
          _hover={{ bg: '#00d1d8' }}
          onClick={() => navigate('/products')}
        >
          All Products
        </Button>

        <Button
          leftIcon={<Icon as={FiInfo} />}
          variant="ghost"
          bg={'#fff'}
          color="text.alternative"
          fontWeight={'bold'}
          _hover={{ bg: '#00d1d8' }}
          onClick={() => navigate('/about')}
        >
          About
        </Button>
<IconButton   bg={'#fff'}
          color="text.alternative"
          fontWeight={'bold'}
          _hover={{ bg: '#00d1d8' }}
          onClick={() => navigate('/')}>
  <FaHome size={20} />
</IconButton>
      </div>
      <AddProductModal isOpen={isOpen} onClose={onClose} />
    </div>

    
  )
}
