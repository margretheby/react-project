import { React, useState } from 'react';
import { shallow } from 'zustand/shallow';
import useItemsStore from '../../variables/useItemsStore.jsx'

export function ItemsInCart () {
    const { count, addOne, clearCount } = useItemsStore(
        (state) => ({
            count: state.count,
            addOne: state.addOne,
            clearCount: state.clearCount,
        }),
        shallow,
    );

    return (
        <div className='pr-3 py-2'>({count})</div>
    )
}








/*
export function CartStuff() {
    const [ itemsInCart, setItemsInCart ] = useState(0);

    function ItemsInCart() {
        setItemsInCart(itemsInCart + 1);
    }

    function AddToCartButtonClicked() {
        ItemsInCart();
        console.log('hello')
    
    }

    return <div className='pr-3 py-2'>({itemsInCart})</div>
} */

