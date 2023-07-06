import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleCountdown, handleDisplayCircles, handleDurationGame } from '../../store/slices/gameOptionsSlice';
import { handleGame, handleScore, handleTimer } from '../../store/slices/gameSlice';

import Countdown from './Countdown/Countdown';
import Subtitle from '../Subtitle/Subtitle.jsx';
import NavigationBtn from '../NavigationBtn/NavigationBtn';
import Timer from './Timer/Timer';
import Circle from './Circle/Circle';
import Score from '../Score/Score';

import './Game.css'


export default function Game({ goToStart, goToGameOptions }) {
    const [ stylesParameters, setStylesParameters ] = useState({});
    const isGame = useSelector(state => state.game.isGame);z

    const dispatch = useDispatch();

    const setGameCountdown = (obj) => dispatch(handleCountdown(obj));
    const setGameDisplayCircle = (obj) => dispatch(handleDisplayCircles(obj));
    const setGame = (obj) => dispatch(handleGame(obj));
    const setGameTimer = (obj) => dispatch(handleDurationGame(obj));
    const setTimer = (obj) => dispatch(handleTimer(obj));
    const setScore = (obj) => dispatch(handleScore(obj));

    // async function getStylesOfCircle(obj) {
    //     await setStylesParameters(obj);
    // }

    // const promiseCircleStyles = new Promise((res, rej) => {});

    function onFinishGame() {
        console.log('сброс');
        setGameCountdown({
            isCountdown: false,
        });
        setGameDisplayCircle({
            isDisplay: false,
        });
        setGame({
            isGame: false,
            isHideScore: true,
        });
        setGameTimer({
            durationGame: 0,
        });
        setTimer({
            isStart: false,
        });
        setScore({
            score: 0,
        });
    }


    return (
        <div className="game">
            <Subtitle>
                <p className="game__title-timer">Time left:&nbsp;</p>
                <Timer />
            </Subtitle>

            <div className="game__board">
                <Countdown />

                {
                    isGame
                        ? <Circle
                            stylesParameters={stylesParameters}
                            setStylesParameters={setStylesParameters}
                            // promiseCircleStyles={promiseCircleStyles}
                        />
                        : <Score />
                }
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
