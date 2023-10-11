import { React } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../App.jsx';

export function NumberOfCartItems () {
    const counter = localStorage.getItem("countItemsInCart");
    const { cart } = useContext(CartContext);

    if (cart.length === 0) {
        localStorage.clear();
    } else {
        return (
            counter ? <div className='px-1.5 py-0 rounded-full bg-black bg-opacity-70 text-white text-xs font-semibold'>{counter}</div> : 
            <div className='pr-3 py-2'>(0)</div>
        ) 
    }


}