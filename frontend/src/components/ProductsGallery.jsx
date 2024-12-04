import { Button, Container, SimpleGrid , VStack , Alert } from '@chakra-ui/react'
import {useState , useEffect} from 'react'
import { useProductsStore } from '../functions/ProductsFunctions'
import ProductCard from './ProductCard'

const AllProducts = () => {
    const { getProducts , products } = useProductsStore()

    useEffect(() => {
        getProducts()
    }, [getProducts]);
    console.log("products : ",products);



    return (
        <Container maxW='container.xl' p={12}>
            <VStack spacing={8}>
                <SimpleGrid columns={{base: 1,md: 2,lg: 3}} spacing={7} w={"full"}>
                    {products.map((product) =>(
                        <ProductCard key={product._id} product={product} />
                    ))}
                </SimpleGrid>
                {products.length === 0 && (
                    <Alert bgColor={"#cf3524"} title="Invalid Fields" textColor={"black"} rounded={"md"}  fontWeight={"semibold"} >
                    Você ainda não cadastrou nenhum produto , Por favor clique no botão de adicionar produto para vê-los aqui 
                  </Alert>
                )}
            </VStack>
        </Container>
    
    )
}

export default AllProducts