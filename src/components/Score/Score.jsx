import React, { useContext } from 'react';

import { GameContext } from '../../contexts/GameContext';

import './Score.css';


export default function Score() {
    const { isStart } = useContext(GameContext);

    const scoreStyles = {
        score: () => {
            return {
                display: `${isStart ? 'none' : 'flex'}`
            }
        }
    }

    //TODO: добавить параграф p в h2
    return (
        <h2 className="score" style={scoreStyles.score()}>
            <p className="score__title">Score:&nbsp;</p>
            <span className="score__value">100</span>
        </h2>
    )
}