import React from 'react';

import {
    colors,
    MIN_SIZE_CIRCLE,
    MAX_SIZE_CIRCLE,
    MIN_POSITION_CIRCLE,
    MAX_POSITION_CIRCLE
} from '../../../utils/constants';

// import { GameContext } from '../../../contexts/GameContext';

import './Circle.css';

export default function Circle({ isGame }) {
    // const {
    //     timeGame,
    //     setTimeGame,
    //     widthBoard,
    //     setWidthBoard,
    //     heightBoard,
    //     setHeightBoard
    // } = useContext(GameContext);

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    const circleStyles = {
        circle: () => {
            const index = Math.round(Math.random() * colors.length);
            const color = colors[index];

            const valueSizeCircle = getRandomNumber(MIN_SIZE_CIRCLE, MAX_SIZE_CIRCLE);

            const valuePositionLeft = getRandomNumber(MIN_POSITION_CIRCLE, (MAX_POSITION_CIRCLE - valueSizeCircle));
            const valuePositionTop = getRandomNumber(MIN_POSITION_CIRCLE, (MAX_POSITION_CIRCLE - valueSizeCircle));

            return {
                width: `${valueSizeCircle}px`,
                height: `${valueSizeCircle}px`,
                background: `linear-gradient(90deg, ${color} 0%, ${color} 47%, ${color} 100%)`,
                boxShadow: `0 0 2px ${color}, 0 0 10px ${color}`,
                left: `${valuePositionLeft}px`,
                top: `${valuePositionTop}px`
            }
        }
    }


    return (
        <div className="circle" style={circleStyles.circle()}></div>
    )
}