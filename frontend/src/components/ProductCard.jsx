import React from 'react';
import { Box, Text, Button, Image, useToast , useDisclosure } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useProductsStore } from '../functions/ProductsFunctions';
import EditProductModal from './EditProductModal';

const ProductCard = ({ product }) => {
    
    const {deleteProduct}=useProductsStore()
    const toast = useToast()

    const handleDeleteProduct = async (id) => {
       const {success , message} =  await deleteProduct(id)

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

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={"bg.secondary"} className=" rounded-xl overflow-hidden shadow-md" >
                <Image src={product.image} alt="Imagem do produto" className="w-full h-48 object-cover"></Image>
                    <div className="p-4">
                        <h2 className="text-white text-lg font-bold">{product.name}</h2>
                        <p className="text-gray-400">{product.desc}</p>
                        <p className="text-blue-500 font-bold">R${product.price}</p>
                        <div className="flex justify-end mt-2 space-x-2">
                            <Button bg={"accent.blue"} onClick={onOpen} className="text-white font-bold py-2 px-4 rounded" > <FaEdit className="mr-2" size={20}/>  Editar</Button>
                            <Button bg={"accent.red"} className=" text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteProduct(product._id)}> <FaTrash className="mr-2" size={20}/> Excluir</Button> 
                        </div>
                    </div>
            </Box>
            <EditProductModal isOpen={isOpen} onClose={onClose} product={product} />
        </>

    );
};

export default ProductCard;
