import React, { useState } from 'react';
import Product from '../components/Product/Product.jsx';
import Search from '../components/Search/Search.jsx';

function Home() {
    return (
      <div className='mt-12'>
        <div>
          <h1 className='text-3xl text-red'>Welcome! </h1>
          <p>Hope you find what you're looking for.</p>
          <Search />
        </div>
        <div className='pt-10'>
          <h2 className='text-xl text-red font-semibold'>All products</h2>
        </div>
        <div>
          <Product />
        </div>
        
      </div>
    );
  }
  
  export default Home;