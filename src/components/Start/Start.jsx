import React from 'react';
import { Link } from 'react-router-dom'
import './Start.css'


export default function Start({ goToGameOptions }) {
    return (
        <>
            <h1 className="start__title">Bursting bubbles</h1>
            <Link
                to={goToGameOptions}
                className="start__link" id="start"
            >
                Start game
            </Link>
        </>
    );
}
