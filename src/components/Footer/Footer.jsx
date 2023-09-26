// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
    </footer>
  );
}

export default Footer;