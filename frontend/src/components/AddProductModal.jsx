import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { useProductsStore } from '../functions/ProductsFunctions'

export default function AddProductModal({ isOpen, onClose }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    desc: ''
  })
const toast = useToast()
const { createProduct } = useProductsStore()

  const handleAddProduct = async() => {
    onClose()
    // Add new product logic goes here
    const {success , message} = await createProduct(newProduct)
    if(!success){
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        duration: 8000,
        isClosable: true,
      })
    }else{
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        duration: 8000,
        isClosable: true,
      })
    }
    
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="bg.secondary">
        <ModalHeader color="text.primary">Add New Product</ModalHeader>
        <ModalCloseButton color="text.primary" />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel color="text.primary">Product Name</FormLabel>
              <Input
              borderWidth="0px"
                placeholder="Enter product name"
                bg="bg.tertiary"
                name="name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                color="text.primary"
                _placeholder={{ color: 'text.secondary' }}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="text.primary">Price</FormLabel>

              <Input
               borderWidth="0px"
                type="number"
                placeholder="Enter price"
                name="price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                bg="bg.tertiary"
                color="text.primary"
                _placeholder={{ color: 'text.secondary' }}
              />


            </FormControl>
            <FormControl>
              <FormLabel color="text.primary">Image URL</FormLabel>
              <Input
               borderWidth="0px"
                placeholder="Enter image URL"
                bg="bg.tertiary"
                name="image"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                color="text.primary"
                _placeholder={{ color: 'text.secondary' }}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="text.primary">Description</FormLabel>
              <Textarea
               borderWidth="0px"
                placeholder="Enter product description"
                bg="bg.tertiary"
                name="desc"
                value={newProduct.desc}
                onChange={(e) => setNewProduct({ ...newProduct, desc: e.target.value })}
                color="text.primary"
                _placeholder={{ color: 'text.secondary' }}
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} _hover={{ bg: '#ff0000' }} onClick={onClose} backgroundColor={"#ff7373"} color="#000000">
            Cancel
          </Button>
          <Button bg="accent.purple" _hover={{ bg: 'accent.blue' }} onClick={handleAddProduct}>
            Add Product
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}