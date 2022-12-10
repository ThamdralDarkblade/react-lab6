import { Container } from '@chakra-ui/react';
import { useLoaderData } from "react-router-dom";
import ProductItem from '../components/ProductItem'

export default function () {
    const product = useLoaderData();

    return (<Container maxW="100%">{
        <ProductItem product = {product} />
    }</Container>
    )
}
