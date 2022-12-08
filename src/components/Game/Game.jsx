import React from 'react';
import './Game.css'


export default function Game() {
    return (
        <div className="game">
            <h3>Осталось <span id="time">00:00</span></h3>
            <div className="board" id="board"></div>
        </div>
    );
}
