import React, { useState, useEffect, useContext } from 'react';

import useCountdown from '../../hooks/useCountdown';

import Subtitle from '../Subtitle/Subtitle.jsx';
import Circle from './Circle/Circle';
import Score from '../Score/Score';
import NavigationBtn from '../NavigationBtn/NavigationBtn';
import Countdown from './Countdown/Countdown';
import Timer from './Timer/Timer';

import { COUNTDOWN_TEXT, COUNTDOWN_LAST_VALUE, GAME_DURATION_10 } from '../../utils/constants';
import { GameContext } from '../../contexts/GameContext';

import './Game.css'


export default function Game({ goToStart, goToGameOptions }) {
    const {
        isCountdown,
        setIsCountdown,
        isGame,
        countdownValue,
        setCountdownValue,
        setIsGame,
        isStart,
        setIsStart,
        durationGame,
        setDurationGame,
        time,
        setTime,
        widthBoard,
        setWidthBoard,
        heightBoard,
        setHeightBoard
    } = useContext(GameContext);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(countdownValue);

            if (countdownValue === COUNTDOWN_TEXT) {
                setIsCountdown(false);
                setIsStart(false);
                setIsGame(true);
                clearInterval(interval);

                // const timer = setInterval(() => {
                //     console.log(durationGame);
                //
                //     if (durationGame === 0) {
                //         clearInterval(timer);
                //         setIsGame(false);
                //
                //     } else {
                //         let value = durationGame - 1;
                //         setDurationGame(value);
                //     }
                // }, 1000);
                //
                // return () => clearInterval(timer);

            } else if (countdownValue === COUNTDOWN_LAST_VALUE) {
                setCountdownValue('Go!');

            } else {
                let value = countdownValue - 1;
                setCountdownValue(value);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countdownValue]);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log(durationGame);

            if (durationGame === 0) {
                clearInterval(timer);
                setIsGame(false);

            } else {
                let value = durationGame - 1;
                setDurationGame(value);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [durationGame]);

    // function onTimer() {
    //     const timer = setInterval(() => {
    //         console.log(durationGame);
    //
    //         if (countdownValue === COUNTDOWN_TEXT) {
    //             setIsCountdown(false);
    //             clearInterval(timer);
    //
    //         } else if (countdownValue === COUNTDOWN_LAST_VALUE) {
    //             setCountdownValue('Go!');
    //
    //         } else {
    //             let value = durationGame - 1;
    //             setDurationGame(value);
    //         }
    //     }, 1000);
    //
    //     return () => clearInterval(timer);
    // }

    function onFinishGame() {
        setCountdownValue(3);
        setDurationGame(0);
        setIsCountdown(false);
        setIsGame(false);
    }


    return (
        <div className="game">
            <Subtitle>
                <p className="game__title-timer">Time left:&nbsp;</p>
                <Timer />
            </Subtitle>

            <div className="game__board">
                <Countdown value={countdownValue} isCountdown={isCountdown} />

                {
                    isGame ? <Circle /> : <Score />
                }

                {/*<Score />*/}
            </div>

            <NavigationBtn
                goToPage={goToGameOptions}
                nameBtn="Back"
                modifierClass="navigation-btn_position_left"
                onFinishGame={onFinishGame}
            />

            <NavigationBtn
                goToPage={goToStart}
                nameBtn="Home"
                modifierClass="navigation-btn_position_right"
                onFinishGame={onFinishGame}
            />
        </div>
    );
}
