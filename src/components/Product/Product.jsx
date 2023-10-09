import { useEffect, useState } from 'react';
import { productsUrl } from '../../api/api.jsx'
import useApi from '../../hooks/useApi.jsx';
import { productCard } from '../../functions/productCard/productCard.jsx'

function Product() {
    const { products, loading, throwError } = useApi(productsUrl)
    const [ allProducts, setAllProducts ] = useState([]);

    useEffect(() => {
      if(products) {
        setAllProducts(products);
      }
    }, [products])

    if (loading) {
        return (
          <div className='animate-pulse pb-96 pt-20'>
            <p className='text-5xl text-red'>...</p>
          </div>)
    }

    if (throwError) {
        return <div>Something went wrong.</div>
    }    
    
    return productCard(allProducts);
  }


  export default Product;