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
            counter ? <div className='pr-3 py-2'>({counter})</div> : 
            <div className='pr-3 py-2'>(0)</div>
        ) 
    }


}