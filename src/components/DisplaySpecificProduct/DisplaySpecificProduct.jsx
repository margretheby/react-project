import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'
import { productsUrl } from '../../api/api.jsx'


function DisplaySpecificProduct() {
    let { id } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false);
    const [throwError, setThrowError] = useState(false);

    useEffect(() => {
        async function getProduct(url) {
            try {
                setLoading(true);
                setThrowError(false);

                const response = await fetch(url);
                const result = await response.json();

                setProduct(result);
            } catch (error) {
                setThrowError(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        } getProduct(`${productsUrl}${id}`)
    }, [id]);

    if (loading || !product) {
        return <div>Loading</div>;
      }
    
    if (throwError) {
        return <div>Error</div>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.imageUrl} />
            <p>{product.description}</p>
        </div>)
}

export default DisplaySpecificProduct;