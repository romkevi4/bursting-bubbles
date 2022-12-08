import React from 'react';
import './GameOptions.css'


export default function GameOptions() {
    return (
        <div className="game-options">
            <h2 className="game-options__title">Select game time</h2>

            <div className="game-options__box-btn">
                <button className="game-options__time-btn" data-time="10">
                    10 sec
                </button>

                <button className="game-options__time-btn" data-time="20">
                    20 sec
                </button>

                <button className="game-options__time-btn" data-time="30">
                    30 sec
                </button>

                <button className="game-options__time-btn" data-time="60">
                    60 sec
                </button>
            </div>
        </div>
    );
}
