import React from 'react';
import { useParams } from 'react-router-dom';
import DisplaySpecificProduct from '../components/DisplaySpecificProduct/DisplaySpecificProduct.jsx';

function ProductPage() {
  const { productId } = useParams();

  return (
    <div>
      <DisplaySpecificProduct />
    </div>
  );
}

export default ProductPage;