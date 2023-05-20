import { useEffect } from "react";
import axios from "axios"
const Products = () => {
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const data = await axios.get('/api/products');
        

        console.log(data.data)
    }
    return (<h3>Products</h3>);
}

export default Products;