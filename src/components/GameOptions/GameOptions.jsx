import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { handleCountdown, handleDurationGame } from '../../store/slices/gameOptionsSlice';

import Subtitle from '../Subtitle/Subtitle';
import NavigationBtn from '../NavigationBtn/NavigationBtn';

import {
    GAME_DURATION_10,
    GAME_DURATION_20,
    GAME_DURATION_30,
    GAME_DURATION_60
} from '../../utils/constants';

import './GameOptions.css';


export default function GameOptions({ goToStart, goToGame }) {
    const dispatch = useDispatch();

    const setGameParameter = (objCountdown, objDurationGame) => {
        dispatch(handleCountdown(objCountdown));
        dispatch(handleDurationGame(objDurationGame));
    }


    return (
        <div className="game-options">
            <Subtitle>
                Select game time
            </Subtitle>

            <div className="game-options__box">
                <Link
                    to={goToGame}
                    onClick={() => setGameParameter(
                        {
                            isCountdown: true,
                        },
                        {
                            durationGame: GAME_DURATION_10
                        }
                    )}
                    className="game-options__time"
                >
                    <p className="game-options__text">10 sec</p>
                </Link>

                <Link
                    to={goToGame}
                    onClick={() => setGameParameter(
                        {
                            isCountdown: true,
                        },
                        {
                            durationGame: GAME_DURATION_20
                        }
                    )}
                    className="game-options__time"
                >
                    <p className="game-options__text">20 sec</p>
                </Link>

                <Link
                    to={goToGame}
                    onClick={() => setGameParameter(
                        {
                            isCountdown: true,
                        },
                        {
                            durationGame: GAME_DURATION_30
                        }
                    )}
                    className="game-options__time"
                >
                    <p className="game-options__text">30 sec</p>
                </Link>

                <Link
                    to={goToGame}
                    onClick={() => setGameParameter(
                        {
                            isCountdown: true,
                        },
                        {
                            durationGame: GAME_DURATION_60
                        }
                    )}
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
