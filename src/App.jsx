import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import Layout from './components/Layout/Layout.jsx';
import AllProductsPage from './pages/AllProductsPage.jsx';

function App() {
  return (
      <div>
        <Layout />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    
  );
}

export default App;
