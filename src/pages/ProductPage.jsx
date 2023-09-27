import React from 'react';
import { useParams } from 'react-router-dom';
import SpecificProduct from '../components/SpecificProduct/SpecificProduct.jsx';

function ProductPage() {
  const { productId } = useParams();

  return (
    <div>
      <SpecificProduct />
    </div>
  );
}

export default ProductPage;