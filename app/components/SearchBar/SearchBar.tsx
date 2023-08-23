'use client'

import './SearchBar.scss'

const SearchBar = () => {
    return(
        <div className='searchDiv'>
            <form>
                <input className='searchInput' placeholder='Search for products'></input>
                <button className='searchButton'>
                    <img src='/assets/blackmarket-search.png'></img>
                </button>
            </form>
        </div>
    )
}

export default SearchBar
