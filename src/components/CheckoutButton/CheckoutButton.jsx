import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../App.jsx';

export function CheckoutButton () {
    const { setCart } = useContext(CartContext);
    const handleEmptyCart = () => {
        setCart([]);
        localStorage.clear();
    }
    return (
        <Link to='/checkout' >
            <button onClick={handleEmptyCart} className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold'>Checkout</button>
        </Link>
    )
}
