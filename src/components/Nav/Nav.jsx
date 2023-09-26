// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
      <nav className='text-red'>
        <ul className='flex flex-row justify-center gap-4'>
          <li>
            <Link to="/" className='focus:bg-pink hover:bg-pink px-3 py-2'>Home</Link>
          </li>
          <li>
            <Link to="/products" className='focus:bg-pink hover:bg-pink px-3 py-2'>Products</Link>
          </li>
          <li>
            <Link to="/contact" className='focus:bg-pink hover:bg-pink px-3 py-2'>Contact</Link>
          </li>
          <li>
            <Link to="/cart" className='focus:bg-pink hover:bg-pink px-3 py-2'>Cart</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;