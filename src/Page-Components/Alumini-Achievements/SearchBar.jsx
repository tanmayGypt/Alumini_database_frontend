import React from 'react';
import FilterButton from './FilterButton';
const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
       <div className='flex w-full py-5 space-x-5'>
            <div className="flex ml-auto justify-centre rounded-xl bg-rose-200">
                <input 
                type="text" 
                value={searchTerm}
                onChange={onSearchChange}
                placeholder="Search here" 
                className="bg-rose-200 rounded-s-xl flex-grow px-5"
                />
                <button className="ml-2 p-2 bg-rose-200 hover:bg-pink-400 text-white rounded-e-xl flex items-center justify-center">
                <img src='src/assets/search-interface-symbol.png' alt="search" className="w-4 h-4" />
            </button>
            </div>
            <div>
                <FilterButton/>
            </div>
       </div>
      
    );
  };
export default SearchBar;