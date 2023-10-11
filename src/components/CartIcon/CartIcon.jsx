import React from "react";
import { NumberOfCartItems } from "../NumberOfCartItems/NumberOfCartItems.jsx";

// displaying cart icon with cart items count
function CartIcon() {
    return (
        <div className="flex">
            <img src="/icons/cart.png" alt="Cart" className='w-9' />
            <div className="fixed top-4 right-16 sm:right-9 md:right-12">
                <NumberOfCartItems />
            </div>
            
        </div>
        
    )
}

export default CartIcon;