import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Start from '../Start/Start';
import GameOptions from '../GameOptions/GameOptions';
import Game from '../Game/Game';

import './App.css';


export default function App() {
    return (
        <div className="app">
            <div className="app__page">
                <Switch>
                    <Route exact path="/">
                        <Start goToGameOptions="/options" />
                    </Route>

                    <Route path="/options">
                        <GameOptions goToStart="/" />
                    </Route>

                    <Route path="/game">
                        <Game
                            isGame={true}
                            goToStart="/"
                            goToGameOptions="/options"
                        />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
