import React, { useEffect, useState, useParams } from 'react'; 
import { Link } from 'react-router-dom'
import { productsUrl } from '../../api/api.jsx'
import { DisplaySpecificProduct } from '../DisplaySpecificProduct/DisplaySpecificProduct.jsx'

function DisplayProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [throwError, setThrowError] = useState(false);

    useEffect(() => {
      async function getProducts() {
          try {
              setLoading(true);
              setThrowError(false);

              const response = await fetch(productsUrl);
              const result = await response.json();

              setProducts(result);
              setLoading(false);
          } catch (error) {
              setLoading(false);
              setThrowError(true);
          }
      }
      getProducts();
    }, []);
    if (loading) {
        return <div>Loading</div>
    }
    if (throwError) {
        return <div>Something went wrong.</div>
    }
    return (
      <div>
        {products.map((product) => (
          <div>
              <Link to={`product/${product.id}`}>
                <h2>{product.title}</h2>
                <img src={product.imageUrl} alt={product.title} />
                <p>{product.description}</p>
                <h4>{product.price}</h4>
                <h4>{product.discountedPrice}</h4>
                <button>View product</button>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  export default DisplayProducts;