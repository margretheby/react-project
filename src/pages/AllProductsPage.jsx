import React from 'react';
import Product from '../components/Product/Product.jsx';

function AllProductsPage() {
    return (
    <div className='w-10/12 mt-12'>
        <div>
            <h1 className='text-5xl text-red text-center'>All products</h1>
        </div>
        
        <Product />
    </div>);
}

export default AllProductsPage;