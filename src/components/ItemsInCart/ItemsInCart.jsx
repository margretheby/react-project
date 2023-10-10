import { useContext } from 'react';
import { productsUrl } from '../../api/api.jsx'
import { CartContext } from '../../App.jsx';
import useApi from '../../hooks/useApi.jsx';

// Display html in cart
function displayItemsInCart(product) {
    const productPrice = product.price;
    const productDiscountedPrice = product.discountedPrice;
    
    return (
        <div>
        {productPrice === productDiscountedPrice ? 
        <div key={product.id} className='bg-pink text-center drop-shadow-sm my-2'>
            <div className='flex justify-between'>
                <div>
                    <img src={product.imageUrl} alt={product.title} className='w-10 md:w-20' />
                </div>
                <div className='flex flex-col justify-center md:max-w-sm md:px-28'>
                    <h2 className='md:text-lg'>{product.title}</h2>
                </div>
                <div className='flex flex-col justify-center pr-2 md:pr-5'>
                    <h4 className='md:text-md font-semibold'>{product.price} kr</h4>
                </div>
            </div>
        </div>
        :  
        <div key={product.id} className='bg-pink my-2 text-center drop-shadow-sm'>
            <div className='flex justify-between'>
                <div>
                    <img src={product.imageUrl} alt={product.title} className='w-10 md:w-20' />
                </div>
                <div className='flex flex-col justify-center md:max-w-sm md:px-28'>
                    <h2 className='md:text-lg'>{product.title}</h2>
                </div>
                <div className='flex flex-col justify-center pr-2 md:pr-5'>
                    <h4 className='line-through text-red md:text-md hidden md:block'>{product.price} kr</h4>
                    <h4 className='md:text-md font-semibold'>{product.discountedPrice} kr</h4>
                </div>
            </div>
        </div>}
        </div>)
    }

export function ItemsInCart() {
    const { products, loading, throwError } = useApi(productsUrl)
    const { cart } = useContext(CartContext);

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
        <div key={products}>
        {cart.map(function (item) {
            return (<div key={item.id} item={item}>
                {displayItemsInCart(item)}
            </div>)
            })}
        </div>)         
}



