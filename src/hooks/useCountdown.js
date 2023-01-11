import React, { useState, useEffect, useContext } from 'react';

import { COUNTDOWN_TEXT } from '../utils/constants';
// import { GameContext } from '../contexts/GameContext';

export default function useCountdown() {
    const [ countdownValue, setCountdownValue ] = useState('');

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log(countdownValue);
    //
    //         if (countdownValue === 'Go!') {
    //             setIsCountdown(false);
    //             clearInterval(interval);
    //
    //         } else if (countdownValue === 1) {
    //             setCountdownValue('Go!');
    //
    //         } else {
    //             let value = countdownValue - 1;
    //             setCountdownValue(value);
    //         }
    //     }, 1000);
    //
    //     return () => clearInterval(interval);
    // }, [countdownValue]);

    return {
        countdownValue,
        setCountdownValue
    };
}