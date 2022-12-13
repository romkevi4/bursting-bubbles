import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Start from '../Start/Start';
import GameOptions from '../GameOptions/GameOptions';
import Game from '../Game/Game';

import { GameContext } from '../../contexts/GameContext';

import './App.css';


export default function App() {
    const [ isGame, setIsGame ] = useState(false);
    const [ isStart, setIsStart ] = useState(false);
    const [ score, setScore ] = useState(0);
    const [ timeGame, setTimeGame ] = useState(0);
    const [ time, setTime ] = useState('0');
    const [ widthBoard, setWidthBoard ] = useState(0);
    const [ heightBoard, setHeightBoard ] = useState(0);

    // function handleStartGame() {
    //
    //     if (text.classList.contains('text')) {
    //         setInterval(decraeseTime, 1000);
    //         createRandomCircle();
    //         setTime(time);
    //     } else {
    //         const newText = screens[2].createElement('h3');
    //         newText.innerHTML = `Осталось <span id="time">00:00</span>`;
    //         text.classList.add('text');
    //         console.log(newText);
    //         // screens[2].innerHTML = `<h3 class="Text">Осталось
    //         // <span id="time">00:00</span></h3>`;
    //         setInterval(decraeseTime, 1000);
    //         createRandomCircle();
    //         setTime(time);
    //     }
    // }


    return (
        <div className="app">
            <div className="app__page">
                <Switch>
                    <Route exact path="/">
                        <Start goToGameOptions="/options" />
                    </Route>

                    <GameContext.Provider value={
                        {
                            isGame,
                            setIsGame,
                            isStart,
                            setIsStart,
                            score,
                            setScore,
                            timeGame,
                            setTimeGame,
                            time,
                            setTime,
                            widthBoard,
                            setWidthBoard,
                            heightBoard,
                            setHeightBoard
                        }
                    }>
                        <Route path="/options">
                            <GameOptions
                                goToStart="/"
                                goToGame="/game"
                            />
                        </Route>

                        <Route path="/game">
                            <Game
                                goToStart="/"
                                goToGameOptions="/options"
                            />
                        </Route>
                    </GameContext.Provider>
                </Switch>
            </div>
        </div>
    );
}
