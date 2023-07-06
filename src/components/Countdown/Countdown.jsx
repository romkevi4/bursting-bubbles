import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleCountdown, handleDisplayCircles } from '../../store/slices/gameOptionsSlice';
import { handleGame, handleTimer } from '../../store/slices/gameSlice';

import {
    COUNTDOWN_INITIAL_VALUE,
    COUNTDOWN_LAST_VALUE,
    COUNTDOWN_TEXT,
    SET_INTERVAL_DELAY
} from '../../utils/constants';

import './Countdown.css';


export default function Countdown() {
    const [ countdownValue, setCountdownValue ] = useState(COUNTDOWN_INITIAL_VALUE);
    const isCountdown = useSelector(state => state.gameOptions.isCountdown);

    const dispatch = useDispatch();

    const setGameCountdown = (obj) => dispatch(handleCountdown(obj));
    const setDisplayCircle = (obj) => dispatch(handleDisplayCircles(obj));
    const setGame = (obj) => dispatch(handleGame(obj));
    const setTimer = (obj) => dispatch(handleTimer(obj));

    useEffect(() => {
        const countdown = () => {
            if (countdownValue === COUNTDOWN_LAST_VALUE) {
                setCountdownValue('Go!');

            } else if (countdownValue === COUNTDOWN_TEXT) {
                setGameCountdown({
                    isCountdown: false,
                });
                setGame({
                    isGame: true,
                    isHideScore: true,
                });
                setTimer({
                    isStart: true,
                });
                setDisplayCircle({
                    isDisplay: true,
                });

                clearInterval(intervalId);

            } else {
                setCountdownValue(countdownValue - 1);
            }
        }

        const intervalId = setInterval(countdown, SET_INTERVAL_DELAY);

        return () => clearInterval(intervalId);
    }, [countdownValue]);


    return (
        <div className={isCountdown ? 'countdown countdown_active' : 'countdown'}>
            <p className="countdown__value">{countdownValue}</p>
        </div>
    );
}
