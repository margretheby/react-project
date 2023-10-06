import { useState, useEffect } from 'react';
import { productsUrl } from '../../api/api.jsx'
import useApi from '../../hooks/useApi.jsx';

// Display html in cart
function displayItemsInCart(product) {
    const productPrice = product.price;
    const productDiscountedPrice = product.discountedPrice;
    
    function CalculateTotal() {
        
    } 
    return (
        <div>
        {productPrice === productDiscountedPrice ? 
        <div key={product.id} className='bg-pink text-center drop-shadow-sm my-2'>
            <div className='flex justify-between'>
                <div>
                    <img src={product.imageUrl} alt={product.title} className='w-20' />
                </div>
                <div className='flex flex-col justify-center max-w-sm px-36'>
                    <h2 className='text-lg'>{product.title}</h2>
                </div>
                <div className='flex flex-col justify-center pr-5'>
                    <h4 className='text-md'>{product.price} kr</h4>
                </div>
            </div>
        </div>
        :  
        <div key={product.id} className='bg-pink my-2 text-center drop-shadow-sm'>
            <div className='flex justify-between'>
                <div>
                    <img src={product.imageUrl} alt={product.title} className='w-20' />
                </div>
                <div className='flex flex-col justify-center max-w-sm px-36'>
                    <h2 className=' text-lg'>{product.title}</h2>
                </div>
                <div className='flex flex-col justify-center pr-5'>
                    <h4 className='line-through text-red text-md'>{product.price} kr</h4>
                    <h4 className='text-md font-semibold'>{product.discountedPrice} kr</h4>
                </div>
            </div>
        </div>}
        <div>
            <CalculateTotal />
        </div>
        </div>)
    }


// Takes the ID of a product, and adds it to cartItem useState when button is clicked
export function AddItemToCartButton(props) {
    const itemId= props.parameter;
    const itemPrice= props.itemPrice;
    console.log(itemPrice);

    // Load cart items from localStorage
    const [ cartItem, setCartItem ] = useState(() => {
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            return JSON.parse(storedItems)
        } else {
            return [itemId]
        }
    });

    // Update localStorage when itemPrices and cartItem changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItem));
      }, [cartItem]);

    // Load item prices from localStorage
    const [ itemPrices, setItemPrices ] = useState(() => {
        const storedPrices = localStorage.getItem('itemPrices');
        if (storedPrices) {
            return JSON.parse(storedPrices)
        } else {
            return [itemPrice]
        }
    });

    // Update localStorage when itemPrices changes
    useEffect(() => {
        localStorage.setItem('itemPrices', JSON.stringify(itemPrices))
    }, [itemPrice]);



    function addItem() {
        return setItemPrices([...itemPrices, `${itemPrice}`]), setCartItem([...cartItem, `${itemId}`]);
        
    }

    return (
        <button onClick={addItem} className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold'>Add to cart</button>
    )
}

export function ItemsInCart() {
    const itemsInCartFromStorage = localStorage.getItem('cartItems');
    const itemsInCart = JSON.parse(itemsInCartFromStorage);
    const { products, loading, throwError } = useApi(productsUrl)


    if (loading) {
        return (
          <div className='animate-pulse pb-96 pt-20'>
            <p className='text-5xl text-red'>...</p>
          </div>)
    }

    if (throwError) {
        return <div>Something went wrong.</div>
    }

    function idInCartMatchesProductId() {
        return <div key={products}>
            {itemsInCart.map((productId) => {
                if(productId !== null) {
                    return products.map((product) => {
                        const discountedPrice = product.discountedPrice;
                        if(productId === product.id) {                  
                            return displayItemsInCart(product);
                        }
                    })
                }
            }
        )}
        </div>         
    }

    return idInCartMatchesProductId();

}

/*  function addTotal() {
        // Not finished adding total
        const priceArray = [discountedPrice];
        console.log(priceArray);
        const sum = priceArray.reduce((priceArray, currentTotal) => priceArray + currentTotal, 0)
        console.log(sum);
        return sum;
    }
    addTotal();     */



