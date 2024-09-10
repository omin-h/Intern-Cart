import React, { useState } from 'react';

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
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBar;
