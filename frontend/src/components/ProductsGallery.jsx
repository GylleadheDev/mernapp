import { Button, Container, SimpleGrid , VStack , Alert } from '@chakra-ui/react'
import {useState , useEffect} from 'react'
import { useProductsStore } from '../functions/ProductsFunctions'
import ProductCard from './ProductCard'
import { IoMdWarning } from "react-icons/io";

const AllProducts = () => {
  const [prod, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { getProducts , products } = useProductsStore();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setIsLoading(false);
    };

    fetchData();
  }, [getProducts]);


    return (
     <Container maxW='container.xl' p={12}>
            <VStack spacing={8}>
                <SimpleGrid columns={{base: 1,md: 2,lg: 3}} spacing={7} w={"full"}>
                  {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {/* Renderizar os produtos aqui */}
          {products && products.map((product) => (
                    {products.map((product) =>(
                        <ProductCard key={product._id} product={product} />
                    ))}
          ))}
        </div>
      )}
                </SimpleGrid>
            </VStack>
        </Container>
        
    
    )
}

export default AllProducts
