import React, { useState, useEffect } from "react";
import fetchGames from "./Conn";
import axios from "axios";
import GameList from "./GameList";
import SearchBar from "./SearchBar";
import "./App.css";
import useDebounce from "./useDebounce"

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchGames("", 20).then((initialData) => {
      console.log("logging initial data ", initialData);
      if (initialData && Array.isArray(initialData)) {
        setGames(initialData);
        console.log("executed if");
      } else {
        console.log("games is not Array, games is: ", typeof initialData);
      }
    });
  }, []);

  const handleSearch = async (term) => {
    try {
      setSearchTerm(term);
      console.log("search term in app.js: ", term);
      const searchData = await fetchGames(term);

      if (searchData && Array.isArray(searchData)) {
        setGames(searchData);
      } else {
        console.error("Invalid or missing data in API response:", searchData);
      }
    } catch (error) {
      console.error("Error in fetching data in app.js: ", error);
    }
  };



  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <GameList games={games} />
    </div>
  );
}

export default App;
