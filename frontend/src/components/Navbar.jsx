import { Box, Button, Flex, Heading, Icon, useDisclosure } from '@chakra-ui/react'
import { FiInfo, FiPackage } from 'react-icons/fi'
import {FaHome} from 'react-icons/fa'
import { MdAddCircleOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import AddProductModal from './AddProductModal'

export default function Navbar() {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="navbar  md:p-4 m-auto  flex flex-col items-center justify-around gap-4 scale-[0.8] md:scale-100 ">
     
      <div className="mt-10 flex flex-row gap-2">
        <Button

          leftIcon={<Icon as={MdAddCircleOutline} />}
          colorScheme="purple"
          variant="solid"
          bg="accent.purple"
          _hover={{ bg: 'accent.blue' }}
          onClick={onOpen}
        >
          Add Product
        </Button>

        <Button
          leftIcon={<Icon as={FiPackage} />}
          variant="ghost"
          color="text.primary"
          _hover={{ bg: 'bg.tertiary' }}
          onClick={() => navigate('/products')}
        >
          All Products
        </Button>

        <Button
          leftIcon={<Icon as={FiInfo} />}
          variant="ghost"
          color="text.primary"
          _hover={{ bg: 'bg.tertiary' }}
          onClick={() => navigate('/about')}
        >
          About
        </Button>
        <a
          
          onClick={() => navigate('/')}
          
          className="flex hover:cursor-pointer mx-4 btn hover:btn-primary btn-ghost justify-center items-center m-auto text-center "
        >
          <FaHome size={30} color="text.primary" />
        </a>
      </div>
      <AddProductModal isOpen={isOpen} onClose={onClose} />
    </div>

    
  )
}
