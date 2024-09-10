import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
    </div>

    
  );
};

export default SearchBar;
