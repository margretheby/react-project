import { useContext } from 'react';
import { CartContext } from '../../App.jsx';

export function CalculateTotal() {
    const { cart } = useContext(CartContext)

    const sum = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.discountedPrice;
    }, 0)

    const total = parseInt(sum, 10)

    return (
        <div className='mt-5 flex items-center justify-center flex-col'>
            <h3 className='text-lg'>Total price:</h3>
            <h3 className='text-3xl font-semibold my-5'>{total} kr</h3>      
        </div>
        )
}