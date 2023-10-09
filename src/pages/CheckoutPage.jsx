import React from 'react';
import { ItemsInCart } from '../components/ItemsInCart/ItemsInCart.jsx'
import { CheckoutButton } from '../components/CheckoutButton/CheckoutButton.jsx'
import { CalculateTotal } from '../components/CalculateTotal/CalculateTotal.jsx'
import { EmptyCartButton } from '../components/EmptyCartButton/EmptyCartButton.jsx'


function CartPage() {
  return (
    <div>
      <div className='mt-12'>
        <h1 className='text-3xl text-red pb-5'>Cart Page</h1>
        <ItemsInCart />
      </div>
      <div>
        <CalculateTotal />
      </div>
      <div className='flex justify-center'>
        <CheckoutButton />
        <EmptyCartButton />
      </div>
    </div>
  );
}

export default CartPage;