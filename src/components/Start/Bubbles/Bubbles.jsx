import React from 'react';
import uniqId from 'uniqid';

import {
    colors,
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
            const index = Math.round(Math.random() * colors.length);
            const color = colors[index];

            return {
                background: `linear-gradient(90deg, ${color} 0%, ${color} 100%)`
            }
        }
    }

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    const bubblesElemAnimationStyles = {
        bubblesElemAnimation: () => {
            const valueDuration = parseFloat(getRandomNumber(MIN_DURATION, MAX_DURATION).toFixed(1));
            const valueDelay = parseFloat(getRandomNumber(MIN_DELAY, MAX_DELAY).toFixed(1));

            const valuePositionLeft = Math.round(getRandomNumber(MIN_POSITION, MAX_POSITION));
            const valuePositionTop = Math.round(getRandomNumber(MIN_POSITION, MAX_POSITION));

            const valueSizeBubble = parseFloat(getRandomNumber(MIN_SIZE_BUBBLE, MAX_SIZE_BUBBLE).toFixed(1));

            return {
                animation: `animateBubble ${valueDuration}s linear infinite, sideWays ${valueDelay}s ease-in-out infinite alternate`,
                left: `${valuePositionLeft}%`,
                top: `${valuePositionTop}%`,
                transform: `scale(${valueSizeBubble})`
            }
        }
    }


    return (
        <div className="bubbles">
            {
                colors.map(() => {
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
