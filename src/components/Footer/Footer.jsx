// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='text-red mb-5 mt-20'>
        <ul className='flex flex-row'>
          <li className='mx-4'>
            <Link to="/">Home</Link>
          </li>
          <li className='mx-4'>
            <Link to="/products">Products</Link>
          </li>
          <li className='mx-4'>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
    </footer>
  );
}

export default Footer;