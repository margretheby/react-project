import { Link } from 'react-router-dom';

function CheckoutSuccess() {
    return (
        <div className='mt-12 mb-48'>
            <h1 className='text-3xl text-red'>Success!</h1>
            <p className='mt-3'>Your order was placed successfully. </p>
            <div className='pt-6'>
                <Link to='/' className='text-xl text-red hover:text-black hover:bg-pink px-1 py-1'>Click here to shop more!</Link>
            </div>
            
        </div>
    )
}

export default CheckoutSuccess;