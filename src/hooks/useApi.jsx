import { useState, useEffect } from 'react';

function useApi(url) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [throwError, setThrowError] = useState(false);

    useEffect(() => {
      async function getProducts() {
          try {
              setLoading(true);
              setThrowError(false);

              const response = await fetch(url);
              const result = await response.json();

              setProducts(result);
              setLoading(false);
          } catch (error) {
              setLoading(false);
              setThrowError(true);
          }
      }
      getProducts();
    }, [url]);

    return { products, loading, throwError };
}

export default useApi;