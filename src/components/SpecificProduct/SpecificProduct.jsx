import { useParams } from 'react-router-dom'
import { productsUrl } from '../../api/api.jsx'
import calculateDiscount from '../../functions/calculateDiscount/calculateDiscount.jsx';
import useApi from '../../hooks/useApi.jsx';
import { CartContext } from '../../App'
import { useContext } from 'react';

function SpecificProduct() {
    let { id } = useParams();
    const { products, loading, throwError } = useApi(productsUrl+id)

    const { setCart } = useContext(CartContext);

    function CountItemsInCart() {
      
      const PutItemsInCart = () => {
        setCart(prevCart => ([...prevCart, products]));
      }

  
      let localStorageCounter = localStorage.getItem("countItemsInCart");
      localStorageCounter = parseInt(localStorageCounter);
      
      if (localStorageCounter) {
        PutItemsInCart();
        localStorage.setItem("countItemsInCart", localStorageCounter + 1);
      } else {
        PutItemsInCart();
        localStorage.setItem("countItemsInCart", 1);
      }
    }



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
    
    const reviews = products.reviews;

    if (reviews) {
      if (products.price === products.discountedPrice) {
        return (
            <div key={products.id}>
              <div className='flex bg-pink max-w-fit mt-10 mb-16 text-center drop-shadow-xl'>
                <div>
                    <img src={products.imageUrl} alt={products.title} className='w-64' />
                </div>
                <div className='flex flex-col items-center justify-center max-w-sm mt-3'>
                    <h2 className='my-5 text-3xl'>{products.title}</h2>
                    <p className='max-w-xs mx-5'>{products.description}</p>
                    <div className='flex justify-center mt-5'>
                        <h4 className='text-lg font-semibold'>{products.price} kr</h4>
                    </div>
                    <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold' onClick={() => {
                      setCart(prevCart => ([...prevCart, products]))
                      CountItemsInCart();
                    }}>
                      Add to cart
                    </button>
                </div>
              </div>
              <div className='w-full'>
                <h2 className='my-5 text-3xl'>Product reviews</h2>
                {products.reviews.map((review) => {
                  return (
                    <div key={review.id} className='mt-10 bg-pink p-4 w-11/12'>
                      <div className='flex justify-between text-red'>
                        <p className='text-lg font-semibold'>{review.username}</p>
                        <p className='text-lg font-semibold'>Rating: {review.rating}</p>
                      </div>
                      <div>
                        <p className='italic ml-5 mt-2'>"{review.description}"</p>
                      </div>
                    </div>
                  
                  )
                })}
              </div>
            </div>)
    } else if (products.discountedPrice < products.price) {
      return (
        <div key={products.id} className='max-w-fit mt-10 mb-16 drop-shadow-xl'>
          <div  className='bg-pink max-w-fit mt-10 mb-16 text-center drop-shadow-xl'>
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
                <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold' onClick={CountItemsInCart}>
                  Add to cart
                </button>
            </div>
          </div>
          </div>
          <div className='w-full'>
                <h2 className='my-5 text-3xl'>Product reviews</h2>
                {products.reviews.map((review) => {
                  return (
                    <div key={review.id} className='mt-10 bg-pink p-4 w-11/12'>
                      <div className='flex justify-between text-red'>
                        <p className='text-lg font-semibold'>{review.username}</p>
                        <p className='text-lg font-semibold'>Rating: {review.rating}</p>
                      </div>
                      <div>
                        <p className='italic ml-5 mt-2'>"{review.description}"</p>
                      </div>
                    </div>
                  
                  )
                })}
              </div>
          
        </div>)
      }
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
                    <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold' onClick={() => {
                      setCart(prevCart => ([...prevCart, products]))
                    }}>
                      Add to cart
                    </button>
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
                <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold' onClick={() => {
                  setCart(prevCart => ([...prevCart, products]))
                  }}>
                    Add to cart
                </button>
            </div>
          </div>
        </div>)
      }
}

export default SpecificProduct;