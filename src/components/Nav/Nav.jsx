import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon.jsx';

// Responsive design layout
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='text-red flex flex-row-reverse justify-end mt-2'>
      <div className='order-1 sm:order-3 flex-col justify-end items-center'>
        <div className='sm:hidden flex justify-end items-start mt-1'>
          <button
            onClick={toggleMenu}
            className='block text-red focus:outline-none focus:bg-pink'
          >
          <img src="/icons/menu.png" alt="Navigation" className='w-8'></img>
          </button>
        </div>
        <div>
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } sm:flex sm:flex-row justify-center gap-4`}
          >
            <li>
              <Link
                to='/'
                className='focus:bg-pink hover:bg-pink px-3 py-2 flex'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/products'
                className='focus:bg-pink hover:bg-pink px-3 py-2 flex'
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='focus:bg-pink hover:bg-pink px-3 py-2 flex'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='order-2 px-3 flex justify-start items-start'>
        <Link to='/cart' className='focus:bg-pink hover:bg-pink px-3'>
          <CartIcon />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;