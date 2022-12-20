import React, { useState, useEffect, useContext } from 'react';

import Subtitle from '../Subtitle/Subtitle.jsx';
import Circle from './Circle/Circle';
import Score from '../Score/Score';
import NavigationBtn from '../NavigationBtn/NavigationBtn';
import Countdown from './Countdown/Countdown';

import { GameContext } from '../../contexts/GameContext';

import './Game.css'


export default function Game({ goToStart, goToGameOptions }) {
    const {
        isCountdown,
        isGame,
        countdownValue,
        setCountdownValue,
        setIsGame,
        isStart,
        setIsStart,
        timeGame,
        setTimeGame,
        time,
        setTime,
        widthBoard,
        setWidthBoard,
        heightBoard,
        setHeightBoard
    } = useContext(GameContext);




    //TODO: проверить условие
    function controlTime() {

    }

    // function useCountdown() {
    //     useEffect(() => {
    //         let i = 0;
    //         const readiness = setInterval(() => {
    //             return (
    //                 <Countdown value={++i} />
    //             );
    //         }, 1000);
    //
    //         return () => clearTimeout(readiness);
    //     }, []);
    // }



    return (
        <div className="game">
            <Subtitle>
                Time left:&nbsp;
                <p className="game__title-timer">{timeGame < 10 ? `00:0${timeGame}` : `00:${timeGame}`}</p>
            </Subtitle>

            <div className="game__board">
                <Countdown value={countdownValue} isCountdown={isCountdown} />

                {/*{*/}
                {/*    isGame ? <Circle isGame={isGame} /> : <Score />*/}
                {/*}*/}

                {/*<Score />*/}
            </div>

            <NavigationBtn
                goToPage={goToGameOptions}
                nameBtn="Back"
                modifierClass="navigation-btn_position_left"
            />

            <NavigationBtn
                goToPage={goToStart}
                nameBtn="Home"
                modifierClass="navigation-btn_position_right"
            />
        </div>
    );
}
