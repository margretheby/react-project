import { useContext } from 'react';
import { productsUrl } from '../../api/api.jsx'
import { CartContext } from '../../App.jsx';
import useApi from '../../hooks/useApi.jsx';
import { displayItemsInCart } from '../../functions/displayHtmlInCart/displayHtmlInCart.jsx';

// fetch products, map through the products in cart and display them
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



