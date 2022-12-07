import React from 'react';

import Start from '../Start/Start';
import GameOptions from '../GameOptions/GameOptions';
import Game from '../Game/Game';

import './App.css';


export default function App() {
    return (
        <div className="app">
            <>
                <Start goToGameOptions="/" />

                <GameOptions />

                <Game />
            </>
        </div>
    );
}
