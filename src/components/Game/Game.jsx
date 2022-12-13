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
        isGame,
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

    function useCountdown() {
        useEffect(() => {
            const readiness = setTimeout(() => {
                setInterval(() => {
                    return (
                        <Countdown value={1} />
                    );
                }, 1000);

            }, 3000);

            return () => clearTimeout(readiness);
        }, []);
    }



    return (
        <div className="game">
            <Subtitle>
                Time left:&nbsp;
                <span className="game__title-timer" id="time">{`00:${time}`}</span>
            </Subtitle>

            <div className="game__board">
                {
                    isGame ? <Circle isGame={isGame} /> : <Score />
                }

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
