import { useState } from "react";
import { productsUrl } from '../../api/api.jsx';
import { DisplaySearchResult } from '../DisplaySearchResult/DisplaySearchResult.jsx';

// Handle search form input and displays result
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
                <label htmlFor='search'><img src='../../icons/searchIcon.png' alt='search' className="w-7 ml-2 hover:bg-pink"></img></label>
            </div>
            <div>
                <DisplaySearchResult product={searchResults} />
            </div>
        </div>
    )
}

export default Search;