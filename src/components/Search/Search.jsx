import { useState } from "react";
import { Link } from 'react-router-dom';
import { productsUrl } from '../../api/api.jsx';
import calculateDiscount from '../../functions/calculateDiscount/calculateDiscount.jsx';

function DisplaySearchResult(product) {
        return (
        <div>
            {product.product.map((product) => {
            if (product.price === product.discountedPrice) {
                <h2>Results</h2>
                return (
                <div key={product.id} className='bg-pink max-w-fit mt-2 mb-16 text-center'>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.imageUrl} alt={product.title} className='w-96' />
                        <h2 className='my-5 text-3xl'>{product.title}</h2>
                        <div className='flex justify-center'>
                        <h4 className='text-lg font-semibold'>{product.price} kr</h4>
                        </div>
                        <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold'>View product</button>
                    </Link>
                </div>)
            } else {
                return (
                    <div key={product.id} className='bg-pink max-w-fit mt-2 mb-16 text-center'>
                    <div className='flex justify-end'>
                        <p className='bg-black text-white text-2xl px-4 py-2 absolute'>-{calculateDiscount(product.price, product.discountedPrice)}%</p>
                    </div>
                        <Link to={`/product/${product.id}`}>
                        <img src={product.imageUrl} alt={product.title} className='w-96' />
                        <h2 className='my-5 text-3xl'>{product.title}</h2>
                        <div className='flex justify-center'>
                            <h4 className='line-through text-red pr-5 text-lg'>{product.price} kr</h4>
                            <h4 className='pl-5 text-lg font-semibold'>{product.discountedPrice} kr</h4>
                        </div>
                        <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-10 font-semibold'>View product</button>
                    </Link>
                    </div>)
                }        
            }) 
      }
    </div>) /*} */
}


function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    function handleKeyUp(search) {
        const filteredSearch = search.filter(function (product) {
            return product.title.toLowerCase().includes(searchQuery.toLowerCase())
        })
        
        setSearchResults(filteredSearch);
        DisplaySearchResult(searchResults);
    }
    
    const handleSearch = async () => {
        try {
            const response = await fetch(productsUrl);
            const result = await response.json();

            handleKeyUp(result);
            DisplaySearchResult(searchResults);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="mt-5">
            <div className="flex">
                <input 
                    type='search' 
                    placeholder='Search' 
                    name='search'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    onKeyUp={handleSearch}>
                </input>
                <label htmlFor='search'><img src='../../icons/searchIcon.png' alt='search' className="w-7 ml-2"></img></label>
            </div>
            <div>
                <DisplaySearchResult product={searchResults} />
            </div>
        </div>
    )
}

export default Search;