import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameList from './GameList';
import SearchBar from './SearchBar';
import './App.css';
import fetchGames from './Conn';
import { toHaveErrorMessage } from '@testing-library/jest-dom/matchers';

 
function App() {

    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchGames('',20).then((initialData) =>{
            setGames(initialData.results);
        });
        
    }, []);

    const handleSearch = async (term) => {
        setSearchTerm(term);
        // Fetch data with the specified search term
        const searchData = await fetchGames(term);
        
        // Check if searchData is defined and has a 'results' property
        if (searchData && searchData.results) {
          setGames(searchData.results);
        } else {
          // Handle the case where searchData is undefined or does not have 'results'
          console.error("Invalid or missing data in API response:", searchData);
        }
      };
    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} onSearch={handleSearch} />
            <GameList games={games} />
        </div>
    );
};


export default App;
