import { useEffect, useState } from 'react';
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


export default function Circle({ stylesParameters, setStylesParameters }) {
    const { isDisplay, score } = useSelector(state => ({
        isDisplay: state.gameOptions.isDisplay,
        score: state.game.score,
    }));
    const [ isFirstRender, seIsFirstRender ] = useState(true);
    // const stylesParameters = useSelector(state => state.game.stylesParameters);
    // console.log(stylesParameters);
    // const [ stylesParameters, setStylesParameters ] = useState({});

    const dispatch = useDispatch();

    const setDisplayCircle = (value) => dispatch(handleDisplayCircles({isDisplay: value}));
    const setScore = (obj) => dispatch(handleScore(obj));
    // const setStylesParameters = (obj) => dispatch(handleCircleStyles(obj));

    // const promiseCircleStyles = new Promise((res, rej) => {
    //     res();
    //     throw new Error(`Error: ${rej.name}`);
    // });

    // const getStylesOfCircle = (obj) => {
    //     return new Promise((res, rej) => {
    //         res(obj);
    //         throw new Error(`Error: ${rej.name}`);
    //     });
    // }

    function saveParameters(obj) {
        return new Promise(res => res(obj));
            // .then(data => setStylesParameters({
            //     display: data.display,
            //     width: data.width,
            //     height: data.height,
            //     background: data.background,
            //     boxShadow: data.boxShadow,
            //     left: data.left,
            //     top: data.top
            // }))
            // .catch(err => console.error(err));
    }

    async function controlGame() {
        await setDisplayCircle(false);
        console.log(isDisplay);

        const newScore = score + 1;
        setScore({
            score: newScore,
        });

        const obj = getStyles(isDisplay);
        console.log(obj);

        setStylesParameters({
            display: obj.display,
            width: obj.width,
            height: obj.height,
            background: obj.background,
            boxShadow: obj.boxShadow,
            left: obj.left,
            top: obj.top,
        });

        // await new Promise(res => setTimeout(res, 0))
        //     .then(() => setDisplayCircle(true))
        //     .catch(err => console.error(err));
        await setDisplayCircle(true);
        console.log(isDisplay);
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

        console.log(isDisplay, index, color, valueSizeCircle, valuePositionLeft, valuePositionTop);
        // setStylesParameters();

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

    // useEffect(() => {
    //     setDisplayCircle(true);
    // }, [stylesParameters]);

    // useEffect(() => {
    //     console.log(isDisplay);
    //
    //     if (isDisplay) {
    //         const obj = getStyles();
    //         console.log(obj);
    //
    //         // saveParameters(obj)
    //         //     .then(data => {
    //         //         console.log(data);
    //         //         setStylesParameters({
    //         //             display: data.display,
    //         //             width: data.width,
    //         //             height: data.height,
    //         //             background: data.background,
    //         //             boxShadow: data.boxShadow,
    //         //             left: data.left,
    //         //             top: data.top
    //         //         });
    //         //     })
    //         //     .catch(err => console.error(err));
    //
    //         setStylesParameters({
    //             display: obj.display,
    //             width: obj.width,
    //             height: obj.height,
    //             background: obj.background,
    //             boxShadow: obj.boxShadow,
    //             left: obj.left,
    //             top: obj.top,
    //         });
    //
    //         // getStylesOfCircle({
    //         //     display: obj.display,
    //         //     width: obj.width,
    //         //     height: obj.height,
    //         //     background: obj.background,
    //         //     boxShadow: obj.boxShadow,
    //         //     left: obj.left,
    //         //     top: obj.top
    //         // })
    //         //     .then(res => {
    //         //         console.log(res);
    //         //         setStylesParameters(res);
    //         //     })
    //         //     .catch(err => console.error(err));
    //
    //         console.log(stylesParameters);
    //     }
    // }, [isDisplay]);

    useEffect(() => {
        if (isFirstRender) {
            const obj = getStyles(isDisplay);
            console.log(obj);

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
            console.log(isFirstRender);
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