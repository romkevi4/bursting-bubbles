import React from 'react';
import './Score.css';


export default function Score() {
    return (
        <h2 className="score">
            Score:&nbsp;
            <span className="score__value">100</span>
        </h2>
    )
}