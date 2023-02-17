import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { handleStartGame } from '../../store/slices/gameOptionsSlice';

import Subtitle from '../Subtitle/Subtitle';
import NavigationBtn from '../NavigationBtn/NavigationBtn';

import {
    GAME_DURATION_10,
    GAME_DURATION_20,
    GAME_DURATION_30,
    GAME_DURATION_60
} from '../../utils/constants';
import { GameContext } from '../../contexts/GameContext';

import './GameOptions.css';


export default function GameOptions({ goToStart, goToGame }) {
    const { handleStartGame } = useContext(GameContext);

    const dispatch = useDispatch();

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
                    onClick={() => handleStartGame(GAME_DURATION_10)}
                    className="game-options__time"
                >
                    <p className="game-options__text">10 sec</p>
                </Link>

                <Link
                    to={goToGame}
                    onClick={() => handleStartGame(GAME_DURATION_20)}
                    className="game-options__time"
                >
                    <p className="game-options__text">20 sec</p>
                </Link>

                <Link
                    to={goToGame}
                    onClick={() => handleStartGame(GAME_DURATION_30)}
                    className="game-options__time"
                >
                    <p className="game-options__text">30 sec</p>
                </Link>

                <Link
                    to={goToGame}
                    onClick={() => handleStartGame(GAME_DURATION_60)}
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
