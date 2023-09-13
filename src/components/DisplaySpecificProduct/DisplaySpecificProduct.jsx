import { useParams } from 'react-router-dom'
import { productsUrl } from '../../api/api.jsx'
import useApi from '../../hooks/useApi.jsx';


function DisplaySpecificProduct() {
    let { id } = useParams();
    const { products, loading, throwError } = useApi(productsUrl+id)

    if (loading || !products) {
        return <div>Loading</div>;
      }
    
    if (throwError) {
        return <div>Error</div>;
    }

    return (
        <div>
            <h1>{products.title}</h1>
            <img src={products.imageUrl} />
            <p>{products.description}</p>
        </div>)
}

export default DisplaySpecificProduct;