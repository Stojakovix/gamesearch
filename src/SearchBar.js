import React, { useState, useEffect } from "react";

export default function SearchBar( {onSearch}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    console.log("Search term is: ", inputValue);
    e.preventDefault();
    if(onSearch) {
      onSearch(inputValue);
    } else {
      console.error("onSearch prop is not provided");
    }
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
