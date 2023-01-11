import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Start from '../Start/Start';
import GameOptions from '../GameOptions/GameOptions';
import Game from '../Game/Game';

import { COUNTDOWN_TEXT } from '../../utils/constants';
import { GameContext } from '../../contexts/GameContext';

import './App.css'

export default function App() {
    const [ isCountdown, setIsCountdown] = useState(false);
    const [ countdownValue, setCountdownValue ] = useState(3);
    const [ isStart, setIsStart ] = useState(false);

    const [ durationGame, setDurationGame ] = useState(0);
    const [ isGame, setIsGame ] = useState(false);




    const [ score, setScore ] = useState(0);
    const [ time, setTime ] = useState(0);
    const [ widthBoard, setWidthBoard ] = useState(0);
    const [ heightBoard, setHeightBoard ] = useState(0);

    const handleStartGame = (value) => {
        setIsCountdown(true);
        setIsStart(true);
        setDurationGame(value);
    }

    // useEffect(() =>
    //     const interval = setInterval(() => {
    //         console.log(countdownValue);
    //
    //         if (countdownValue === 'Go!') {
    //             setIsCountdown(false);
    //             clearInterval(interval);
    //
    //         } else if (countdownValue === 1) {
    //             setCountdownValue('Go!');
    //
    //         } else {
    //             let value = countdownValue - 1;
    //             setCountdownValue(value);
    //         }
    //     }, 1000);
    //
    //     return () => clearInterval(interval);
    // }, [countdownValue]);



    // function decreaseTime() {
    //     if (timeGame !== 0) {
    //         setTime(--timeGame);
    //
    //         timeGame < 10 && (setTime(`0${timeGame}`));
    //
    //     } else {
    //         finishGame();
    //     }
    // }

    function finishGame() {
        setIsGame(false);

    }


    return (
        <div className="app">
            <div className="app__page">
                <Switch>
                    <Route exact path="/">
                        <Start goToGameOptions="/options" />
                    </Route>

                    <GameContext.Provider value={
                        {
                            isCountdown,
                            setIsCountdown,
                            countdownValue,
                            setCountdownValue,
                            isGame,
                            setIsGame,
                            isStart,
                            setIsStart,
                            score,
                            setScore,
                            durationGame,
                            setDurationGame,
                            // time,
                            // setTime,
                            widthBoard,
                            setWidthBoard,
                            heightBoard,
                            setHeightBoard,
                            handleStartGame
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
