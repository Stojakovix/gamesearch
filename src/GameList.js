import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";

const GameList = ({ games }) => {
  try {
    console.log("games: ", games);
    
    return (
      <div className="gameListContainer">
        <div className="gameList"> 
        {games.map((game) => (
        
        <GameCard
          key={game.id}
          title={game.name}
          description={game.released}
        />
      ))}
        </div>
        
      </div>
    );
  } catch (error) {
    console.log("error in gameList: ", error);
  }
};

export default GameList;
