import { Link } from "react-router-dom";

export function CheckoutButton () {
    return (
        <Link to='/checkout' >
            <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold'>Checkout</button>
        </Link>
    )
}
