import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleDisplayCircles } from '../../store/slices/gameOptionsSlice';
import { handleScore } from '../../store/slices/gameSlice';

import {
    COLORS,
    MIN_SIZE_CIRCLE,
    MAX_SIZE_CIRCLE,
    MIN_POSITION_CIRCLE,
    MAX_POSITION_CIRCLE
} from '../../utils/constants';

import './Circle.css';


export default function Circle({ stylesParameters, setStylesParameters }) {
    const { isDisplay, score } = useSelector(state => ({
        isDisplay: state.gameOptions.isDisplay,
        score: state.game.score,
    }));
    const [ isFirstRender, seIsFirstRender ] = useState(true);

    const dispatch = useDispatch();

    const setDisplayCircle = (value) => dispatch(handleDisplayCircles({isDisplay: value}));
    const setScore = (obj) => dispatch(handleScore(obj));

    async function controlGame() {
        await setDisplayCircle(false);

        const newScore = score + 1;
        setScore({
            score: newScore,
        });

        const obj = getStyles(isDisplay);

        setStylesParameters({
            display: obj.display,
            width: obj.width,
            height: obj.height,
            background: obj.background,
            boxShadow: obj.boxShadow,
            left: obj.left,
            top: obj.top,
        });

        await setDisplayCircle(true);
    }

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function getStyles(isDisplay) {
        const index = Math.round(Math.random() * (COLORS.length - 1));
        const color = COLORS[index];

        const valueSizeCircle = getRandomNumber(MIN_SIZE_CIRCLE, MAX_SIZE_CIRCLE);

        const valuePositionLeft = getRandomNumber(MIN_POSITION_CIRCLE, (MAX_POSITION_CIRCLE - valueSizeCircle));
        const valuePositionTop = getRandomNumber(MIN_POSITION_CIRCLE, (MAX_POSITION_CIRCLE - valueSizeCircle));

        return {
            display: `${isDisplay ? 'flex' : 'none'}`,
            width: `${valueSizeCircle}px`,
            height: `${valueSizeCircle}px`,
            background: `linear-gradient(90deg, ${color} 0%, ${color} 47%, ${color} 100%)`,
            boxShadow: `0 0 2px ${color}, 0 0 10px ${color}`,
            left: `${valuePositionLeft}px`,
            top: `${valuePositionTop}px`
        };
    }

    useEffect(() => {
        if (isFirstRender) {
            const obj = getStyles(isDisplay);

            setStylesParameters({
                display: obj.display,
                width: obj.width,
                height: obj.height,
                background: obj.background,
                boxShadow: obj.boxShadow,
                left: obj.left,
                top: obj.top,
            });

            seIsFirstRender(false);
        }
    }, [isDisplay, isFirstRender]);


    return (
        <div
            className="circle"
            style={stylesParameters}
            onClick={controlGame}
        ></div>
    );
}