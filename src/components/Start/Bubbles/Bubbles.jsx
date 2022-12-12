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
    MIN_SIZE,
    MAX_SIZE
} from '../../../utils/constants';

import './Bubbles.css';


export default function Bubbles() {
    const bubblesElemStyles = {
        bubblesElem: () => {
            const index = Math.round(Math.random() * colors.length);

            return {
                background: `linear-gradient(90deg, ${colors[index]} 0%, ${colors[index]} 100%)`
            }
        }
    }

    const bubblesElemAnimationStyles = {
        bubblesElemAnimation: () => {
            const valueDuration = parseFloat(((Math.random() * (MAX_DURATION - MIN_DURATION)) + MIN_DURATION).toFixed(1));
            const valueDelay = parseFloat(((Math.random() * (MAX_DELAY - MIN_DELAY)) + MIN_DELAY).toFixed(1));
            const valuePositionLeft = Math.round(Math.random() * (MAX_POSITION - MIN_POSITION) + MIN_POSITION);
            const valuePositionTop = Math.round(Math.random() * (MAX_POSITION - MIN_POSITION) + MIN_POSITION);
            const valueSizeBubble = parseFloat(((Math.random() * (MAX_SIZE - MIN_SIZE)) + MIN_SIZE).toFixed(1));

            return {
                animation: `animateBubble ${valueDuration}s linear infinite, sideWays ${valueDelay}s ease-in-out infinite alternate`,
                left: `${valuePositionLeft}%`,
                top: `${valuePositionTop}%`,
                transform: `scale(${valueSizeBubble})`
            }
        }
    }

    function addBubbles() {
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
    }


    return (
        <div className="bubbles">
            {
                colors.map(() => addBubbles())
            }
        </div>
    );
}
