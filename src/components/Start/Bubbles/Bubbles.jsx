import React from 'react';
import uniqId from 'uniqid';

import {
    COLORS,
    MIN_DURATION,
    MAX_DURATION,
    MIN_DELAY,
    MAX_DELAY,
    MIN_POSITION,
    MAX_POSITION,
    MIN_SIZE_BUBBLE,
    MAX_SIZE_BUBBLE
} from '../../../utils/constants';

import './Bubbles.css';


export default function Bubbles() {
    const bubblesElemStyles = {
        bubblesElem: () => {
            const index = Math.round(Math.random() * (COLORS.length - 1));
            const color = COLORS[index];

            return {
                background: `linear-gradient(90deg, ${color} 0%, ${color} 100%)`
            }
        }
    }

    const bubblesElemAnimationStyles = {
        bubblesElemAnimation: () => {
            const valueDuration = changeRandomValue(MIN_DURATION, MAX_DURATION);
            const valueDelay = changeRandomValue(MIN_DELAY, MAX_DELAY);

            const valuePositionLeft = Math.round(getRandomNumber(MIN_POSITION, MAX_POSITION));
            const valuePositionTop = Math.round(getRandomNumber(MIN_POSITION, MAX_POSITION));

            const valueSizeBubble = changeRandomValue(MIN_SIZE_BUBBLE, MAX_SIZE_BUBBLE);

            return {
                animation: `animateBubble ${valueDuration}s linear infinite, sideWays ${valueDelay}s ease-in-out infinite alternate`,
                left: `${valuePositionLeft}%`,
                top: `${valuePositionTop}%`,
                transform: `scale(${valueSizeBubble})`
            }
        }
    }

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function changeRandomValue(minValue, maxValue) {
        return parseFloat(getRandomNumber(minValue, maxValue)).toFixed(1);
    }


    return (
        <div className="bubbles">
            {
                COLORS.map(() => {
                    const id = uniqId();

                    return (
                        <div
                            className="bubbles__elem"
                            style={
                                Object.assign(
                                    bubblesElemStyles.bubblesElem(),
                                    bubblesElemAnimationStyles.bubblesElemAnimation()
                                )
                            }
                            key={id}
                        ></div>
                    );
                })
            }
        </div>
    );
}
