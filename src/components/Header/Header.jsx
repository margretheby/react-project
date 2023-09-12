// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx'

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Your Logo</Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;