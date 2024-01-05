import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';

export default function GameList() {
    return (
        <div className='gameListContainer'>
            <li className='gameList'>
                <ul>
                    <GameCard/>
                </ul>
            </li>
        </div>
    )

} 
    
