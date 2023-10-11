import React from "react";
import { NumberOfCartItems } from "../NumberOfCartItems/NumberOfCartItems.jsx";

function CartIcon() {
    return (
        <div className="flex">
            <img src="/icons/cart.png" alt="Cart" className='w-9' />
            <div className="fixed top-4 right-12">
                <NumberOfCartItems />
            </div>
            
        </div>
        
    )
}

export default CartIcon;