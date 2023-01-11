import React, { useContext } from 'react';

import { GAME_DURATION_10 } from '../../../utils/constants';
import { GameContext } from '../../../contexts/GameContext';

import './Timer.css';


export default function Timer() {
    const { durationGame } = useContext(GameContext);

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
