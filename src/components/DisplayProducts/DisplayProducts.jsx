import { Link } from 'react-router-dom'
import { productsUrl } from '../../api/api.jsx'
import useApi from '../../hooks/useApi.jsx';

function DisplayProducts() {
    const { products, loading, throwError } = useApi(productsUrl)

    if (loading) {
        return <div>Loading</div>
    }
    if (throwError) {
        return <div>Something went wrong.</div>
    }

    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
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