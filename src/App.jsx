import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CheckoutPage.jsx';
import Layout from './components/Layout/Layout.jsx';
import AllProductsPage from './pages/AllProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
      <div className='bg-rose'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </div>
    
  );
}

export default App;
