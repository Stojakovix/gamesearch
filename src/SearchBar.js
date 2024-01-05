import React, { useState, useEffect } from 'react';



export default function SearchBar() {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    
    const handleSearch = () => {
        console.log('Search term is: ', inputValue)
    };


    return(
        <div className="searchBar">
      <h1 className="searchHeader">GameSearch</h1>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search Here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
    );
}