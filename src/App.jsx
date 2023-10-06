import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Home from './pages/Home.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CheckoutPage.jsx';
import Layout from './components/Layout/Layout.jsx';
import AllProductsPage from './pages/AllProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CheckoutSuccess from './pages/CheckoutSuccessPage.jsx';
export const CartContext = createContext([]);

function App() {
  const [ cart, setCart ] = useState([]);
  const value = { cart, setCart };
  return (
      <div className='bg-rose'>
        <CartContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutSuccess />} />
          </Route>
        </Routes>
        </CartContext.Provider>
      </div>
    
  );
}

export default App;
