import { useParams } from 'react-router-dom'
import { productsUrl } from '../../api/api.jsx'
import calculateDiscount from '../../functions/calculateDiscount/calculateDiscount.jsx';
import useApi from '../../hooks/useApi.jsx';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton.jsx'


function SpecificProduct() {
    let { id } = useParams();
    const { products, loading, throwError } = useApi(productsUrl+id)

    if (loading || !products) {
        return (
            <div className='animate-pulse pb-96 pt-20'>
                <p className='text-5xl text-red'>...</p>
            </div>
        );
      }
    
    if (throwError) {
        return <div>Error</div>;
    }

    if (products.price === products.discountedPrice) {
        return (
            <div key={products.id} className='bg-pink max-w-fit mt-10 mb-16 text-center drop-shadow-xl'>
              <div className='flex'>
                <div>
                    <img src={products.imageUrl} alt={products.title} className='w-64' />
                </div>
                <div className='flex flex-col items-center justify-center max-w-sm mt-3'>
                    <h2 className='my-5 text-3xl'>{products.title}</h2>
                    <p className='max-w-xs mx-5'>{products.description}</p>
                    <div className='flex justify-center mt-5'>
                        <h4 className='text-lg font-semibold'>{products.price} kr</h4>
                    </div>
                    <AddToCartButton />
                </div>
              </div>
            </div>)
    } else {
      return (
        <div key={products.id} className='bg-pink max-w-fit mt-10 mb-16 text-center drop-shadow-xl'>
          <div className='flex justify-end'>
            <p className='bg-black text-white text-xl px-3 py-1 absolute'>-{calculateDiscount(products.price, products.discountedPrice)}%</p>
          </div>
          <div className='flex'>
            <div>
                <img src={products.imageUrl} alt={products.title} className='w-64' />
            </div>
            <div className='flex flex-col items-center justify-center max-w-sm mt-3'>
                <h2 className='my-5 text-3xl'>{products.title}</h2>
                <p className='max-w-xs mx-5'>{products.description}</p>
                <div className='flex justify-center mt-5'>
                    <h4 className='line-through text-red pr-5 text-lg'>{products.price} kr</h4>
                    <h4 className='pl-5 text-lg font-semibold'>{products.discountedPrice} kr</h4>
                </div>
                <AddToCartButton />
            </div>
          </div>
        </div>)
      }
}

export default SpecificProduct;