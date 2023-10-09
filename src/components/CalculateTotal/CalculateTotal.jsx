import { useContext } from 'react';
import { CartContext } from '../../App.jsx';

export function CalculateTotal() {
    const { cart } = useContext(CartContext)

    const sum = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.discountedPrice;
    }, 0)

    const total = parseInt(sum, 10)

    return <div>Total price: {total} kr</div>
    
}