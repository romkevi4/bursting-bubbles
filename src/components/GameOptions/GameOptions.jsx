import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Subtitle from '../Subtitle/Subtitle.jsx';
import NavigationBtn from '../NavigationBtn/NavigationBtn';

import { GameContext } from '../../contexts/GameContext';

import './GameOptions.css';


export default function GameOptions({ goToStart, goToGame }) {
    let {
        isGame,
        setIsGame,
        timeGame,
        setTimeGame,
        time,
        setTime,
        handleStartGame
    } = useContext(GameContext);

    // const handleStartGame = (value) => {
    //     setIsGame(true);
    //     setTimeGame(value);
    //     setInterval(decreaseTime, 1000);
    // }

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
    //
    // function finishGame() {
    //     setIsGame(false);
    //
    // }

    return (
        <div className="game-options">
            <Subtitle>
                Select game time
            </Subtitle>

            <div className="game-options__box">
                <Link
                    to={goToGame}
                    onClick={() => handleStartGame(10)}
                    className="game-options__time"
                >
                    <p className="game-options__text">10 sec</p>
                </Link>

                <Link
                    to={goToGame}
                    onClick={() => handleStartGame(20)}
                    className="game-options__time"
                >
                    <p className="game-options__text">20 sec</p>
                </Link>

                <Link
                    to={goToGame}
                    onClick={() => handleStartGame(30)}
                    className="game-options__time"
                >
                    <p className="game-options__text">30 sec</p>
                </Link>

                <Link
                    to={goToGame}
                    onClick={() => handleStartGame(60)}
                    className="game-options__time"
                >
                    <p className="game-options__text">60 sec</p>
                </Link>
            </div>

            <NavigationBtn
                goToPage={goToStart}
                nameBtn="Back"
                modifierClass="navigation-btn_position_left"
            />
        </div>
    );
}
