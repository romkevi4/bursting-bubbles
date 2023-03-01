import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleDisplayCircles } from '../../../store/slices/gameOptionsSlice';
import { handleScore } from '../../../store/slices/gameSlice';

import {
    COLORS,
    MIN_SIZE_CIRCLE,
    MAX_SIZE_CIRCLE,
    MIN_POSITION_CIRCLE,
    MAX_POSITION_CIRCLE
} from '../../../utils/constants';

import './Circle.css';


export default function Circle() {
    const { isDisplay, score } = useSelector(state => ({
        isDisplay: state.gameOptions.isDisplay,
        score: state.game.score,
    }));
    const [ stylesParameters, setStylesParameters ] = useState({});

    const dispatch = useDispatch();

    const setDisplayCircle = (value) => dispatch(handleDisplayCircles({isDisplay: value}));
    const setScore = (obj) => dispatch(handleScore(obj));

    // useEffect(() => {
    //     setScore({
    //         score: score + 10,
    //     });
    // }, []);

    function controlGame() {
        // console.log('controlGame');
        const newScore = score + 1;
        setScore({
            score: newScore,
        });

        console.log(isDisplay);
        setDisplayCircle(false);
        console.log(isDisplay);
        setDisplayCircle(true);
        // console.log(isDisplay);
    }

    // useEffect(() => {
    //     setDisplayCircle(true);
    // }, []);

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    // function getStylesParameters() {
    //     console.log('запущен');
    //     const index = Math.round(Math.random() * COLORS.length);
    //     const color = COLORS[index];
    //
    //     const valueSizeCircle = getRandomNumber(MIN_SIZE_CIRCLE, MAX_SIZE_CIRCLE);
    //
    //     const valuePositionLeft = getRandomNumber(MIN_POSITION_CIRCLE, (MAX_POSITION_CIRCLE - valueSizeCircle));
    //     const valuePositionTop = getRandomNumber(MIN_POSITION_CIRCLE, (MAX_POSITION_CIRCLE - valueSizeCircle));
    //
    //     return setStylesParameters({
    //         color,
    //         valueSizeCircle,
    //         valuePositionLeft,
    //         valuePositionTop
    //     });
    // }

    useEffect(() => {
        console.log(isDisplay);
        const index = Math.round(Math.random() * COLORS.length);
        const color = COLORS[index];

        const valueSizeCircle = getRandomNumber(MIN_SIZE_CIRCLE, MAX_SIZE_CIRCLE);

        const valuePositionLeft = getRandomNumber(MIN_POSITION_CIRCLE, (MAX_POSITION_CIRCLE - valueSizeCircle));
        const valuePositionTop = getRandomNumber(MIN_POSITION_CIRCLE, (MAX_POSITION_CIRCLE - valueSizeCircle));

        setStylesParameters({
            color,
            valueSizeCircle,
            valuePositionLeft,
            valuePositionTop
        });

        console.log(stylesParameters);
    }, [isDisplay, score]);

    // console.log(stylesParameters);

    const styles = {
        circle: {
            // console.log('вызов');

            // const index = Math.round(Math.random() * COLORS.length);
            // const color = COLORS[index];
            //
            // const valueSizeCircle = getRandomNumber(MIN_SIZE_CIRCLE, MAX_SIZE_CIRCLE);
            //
            // const valuePositionLeft = getRandomNumber(MIN_POSITION_CIRCLE, (MAX_POSITION_CIRCLE - valueSizeCircle));
            // const valuePositionTop = getRandomNumber(MIN_POSITION_CIRCLE, (MAX_POSITION_CIRCLE - valueSizeCircle));


            display: `${isDisplay ? 'flex' : 'none'}`,
            width: `${stylesParameters.valueSizeCircle}px`,
            height: `${stylesParameters.valueSizeCircle}px`,
            background: `linear-gradient(90deg, ${stylesParameters.color} 0%, ${stylesParameters.color} 47%, ${stylesParameters.color} 100%)`,
            boxShadow: `0 0 2px ${stylesParameters.color}, 0 0 10px ${stylesParameters.color}`,
            left: `${stylesParameters.valuePositionLeft}px`,
            top: `${stylesParameters.valuePositionTop}px`
        }
    };


    return (
        <div
            className="circle"
            style={styles.circle}
            onClick={controlGame}
        ></div>
    )
}