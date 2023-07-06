import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleDisplayCircles, handleDurationGame } from '../../store/slices/gameOptionsSlice';
import { handleGame } from '../../store/slices/gameSlice';

import { GAME_DURATION_10, SET_INTERVAL_DELAY } from '../../utils/constants';

import './Timer.css';


export default function Timer() {
    const { durationGame, isStart } = useSelector(state => ({
        durationGame: state.gameOptions.durationGame,
        isStart: state.game.isStart,
    }));

    const dispatch = useDispatch();

    const setDisplayCircle = (obj) => dispatch(handleDisplayCircles(obj));
    const setGame = (obj) => dispatch(handleGame(obj));
    const setGameTimer = (obj) => dispatch(handleDurationGame(obj));


    useEffect(() => {
        const tick = () => {
            if(isStart) {
                if (durationGame === 0) {
                    setGame({
                        isGame: false,
                        isHideScore: false,
                    });
                    setDisplayCircle({
                        isDisplay: false,
                    });

                    clearInterval(timerId);
                } else {
                    setGameTimer({
                        durationGame: durationGame - 1,
                    });
                }
            }
        };

        const timerId = setInterval(tick, SET_INTERVAL_DELAY);

        return () => clearInterval(timerId);
    }, [isStart, durationGame]);


    return (
        <p className="timer">
            {
                durationGame < GAME_DURATION_10
                    ? `00:0${durationGame}`
                    : `00:${durationGame}`
            }
        </p>
    );
}
