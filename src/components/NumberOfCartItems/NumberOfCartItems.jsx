import { React } from 'react';

export function NumberOfCartItems () {
    const counter = localStorage.getItem("countItemsInCart");

    return (
        counter ? <div className='pr-3 py-2'>({counter})</div> : 
        <div className='pr-3 py-2'>(0)</div>
    )
}