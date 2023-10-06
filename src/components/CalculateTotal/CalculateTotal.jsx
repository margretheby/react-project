import { useContext } from 'react';
import { CartContext } from '../../App.jsx';

export function CalculateTotal() {
    const { cart } = useContext(CartContext)
    const prices = cart.map((product) =>
        console.log(product.price)

        )
    const sum = prices.reduce((accValue, currentValue) => accValue + currentValue, 0);
    console.log(sum);
    return <div>Total price: {sum}</div>
    
}