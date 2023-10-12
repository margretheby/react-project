// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx'

// Header component with logo and navigation
function Header() {
  return (
    <header className='flex justify-between w-11/12 pt-2 top-0'>
      <div className="text-red text-5xl">
        <Link to="/">Billie's</Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;