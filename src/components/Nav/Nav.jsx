// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ItemsInCart } from '../ItemsInCart/ItemsInCart.jsx'


function Nav() {
  return (
      <nav className='text-red'>
        <ul className='flex flex-row justify-center gap-4'>
          <li>
            <Link to="/" className='focus:bg-pink hover:bg-pink px-3 py-2 flex'>Home</Link>
          </li>
          <li>
            <Link to="/products" className='focus:bg-pink hover:bg-pink px-3 py-2 flex'>Products</Link>
          </li>
          <li>
            <Link to="/contact" className='focus:bg-pink hover:bg-pink px-3 py-2 flex'>Contact</Link>
          </li>
          <li>
            <div className='flex'>
              <Link to="/cart" className='focus:bg-pink hover:bg-pink pl-3 pr-1 py-2'>Cart </Link>
              <ItemsInCart />
            </div>

          </li>
        </ul>
      </nav>
  );
}

export default Nav;