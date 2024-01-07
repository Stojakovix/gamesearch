import React, { useState, useEffect } from "react";
import _, { isBoolean } from 'lodash';

export default function SearchBar( {onSearch}) {
  const [inputValue, setInputValue] = useState("");



  const handleSearch = _.debounce((inputValue) => {
    if(onSearch) {
      onSearch(inputValue);
    }
  }, 1000)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleSearch(e.target.value);
    
  };

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <h1 className="searchHeader">GameSearch</h1>

      <div className="searchInput">
        <input
          type="text"
          placeholder="Search Here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" aria-label="Search">Search</button>
      </div>
    </form>
  );
}
