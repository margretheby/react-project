import { Link } from 'react-router-dom'
import { productsUrl } from '../../api/api.jsx'
import useApi from '../../hooks/useApi.jsx';
import calculateDiscount from '../../functions/calculateDiscount/calculateDiscount.jsx';

function DisplayProducts() {
    const { products, loading, throwError } = useApi(productsUrl)

    if (loading) {
        return (
          <div className='animate-pulse pb-96 pt-20'>
            <p className='text-5xl text-red'>...</p>
          </div>)
    }

    if (throwError) {
        return <div>Something went wrong.</div>
    }

    return (
      <div className='drop-shadow-xl'>
        {products.map((product) => {
          if (product.price === product.discountedPrice) {
            return (
            <div key={product.id} className='bg-pink max-w-fit mt-10 mb-16 text-center'>
              <Link to={`/product/${product.id}`}>
                <img src={product.imageUrl} alt={product.title} className='w-96' />
                <h2 className='my-5 text-3xl'>{product.title}</h2>
                <div className='flex justify-center'>
                  <h4 className='text-lg font-semibold'>{product.price} kr</h4>
                </div>
                <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold'>View product</button>
            </Link>
          </div>)
        } else {
          return (
            <div key={product.id} className='bg-pink max-w-fit mt-10 mb-16 text-center'>
              <div className='flex justify-end'>
                <p className='bg-black text-white text-2xl px-4 py-2 absolute'>-{calculateDiscount(product.price, product.discountedPrice)}%</p>
              </div>
                <Link to={`/product/${product.id}`}>
                  <img src={product.imageUrl} alt={product.title} className='w-96' />
                  <h2 className='my-5 text-3xl'>{product.title}</h2>
                  <div className='flex justify-center'>
                    <h4 className='line-through text-red pr-5 text-lg'>{product.price} kr</h4>
                    <h4 className='pl-5 text-lg font-semibold'>{product.discountedPrice} kr</h4>
                  </div>
                  <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold'>View product</button>
              </Link>
            </div>)
          }        
        }) 
      }
    </div>) 
  }


  export default DisplayProducts;