import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Start from '../Start/Start';
import GameOptions from '../GameOptions/GameOptions';
import Game from '../Game/Game';

import { GameContext } from '../../contexts/GameContext';
import { countdownText } from '../../utils/constants';

import './App.css'

export default function App() {
    const [ isCountdown, setIsCountdown] = useState(false);
    const [ countdownValue, setCountdownValue ] = useState('');

    const [ reverseCounter, setReverseCounter ] = useState(3);
    const [ isGame, setIsGame ] = useState(false);
    const [ isStart, setIsStart ] = useState(false);
    const [ score, setScore ] = useState(0);
    const [ timeGame, setTimeGame ] = useState(0);
    const [ time, setTime ] = useState(0);
    const [ widthBoard, setWidthBoard ] = useState(0);
    const [ heightBoard, setHeightBoard ] = useState(0);

    const handleStartGame = (value) => {
        setCountdown();
        // setIsGame(true);
        setTimeGame(value);
        // setInterval(decreaseTime, 1000);
    }

    function setCountdown() {
        setIsCountdown(true);

        // setInterval(() => {
        //     countdownText.forEach(item => {
        //         const readiness = setTimeout(() => {
        //             console.log(item);
        //             setCountdownValue(item)
        //         }, 1000);
        //     });
        // }, 1000);

        let i = 0;
        while (i < countdownText.length) {
            setTimeout(() => {
                console.log(countdownText[i]);
                setCountdownValue(countdownText[i]);
            }, 1000);

            i++;
        }


        setTimeout(() => {
            // console.log(isCountdown);
            setIsCountdown(false);
            setCountdownValue('');
            // console.log(isCountdown);
        }, 5000);

        // return () => clearTimeout(readiness);
    }

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
                            timeGame,
                            setTimeGame,
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
