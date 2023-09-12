import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {productId}</p>
      {/* Add product details based on the productId */}
    </div>
  );
}

export default ProductPage;