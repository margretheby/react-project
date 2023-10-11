import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../App.jsx';

// Button to clear localStorage and empty cart state.
export function EmptyCartButton () {
    const { cart, setCart } = useContext(CartContext);
    const handleEmptyCart = () => {
        setCart([]);
        localStorage.clear();
    }
    if(cart.length === 0)  {
        return (
                <div></div>
        )
    }
    return (
        <Link to='/cart' >
            <button onClick={handleEmptyCart} className='ml-6 bg-pink text-black hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold'>Empty cart</button>
        </Link>
    )
}