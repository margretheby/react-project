import Product from '../components/Product/Product.jsx';

function Home() {
    return (
      <div className='mt-12'>
        <div>
          <h1 className='text-3xl text-red'>Welcome! </h1>
          <p>Hope you find what you're looking for.</p>
        </div>

        <Product />
      </div>
    );
  }
  
  export default Home;