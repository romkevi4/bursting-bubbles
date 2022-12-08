import React from 'react';
import { Link } from 'react-router-dom'
import './Start.css'


export default function Start({ goToGameOptions }) {
    return (
        <div className="start">
            <h1 className="start__title">
                <span className="start__title-jumping">B</span>
                <span className="start__title-jumping">u</span>
                <span className="start__title-jumping">r</span>
                <span className="start__title-jumping">s</span>
                <span className="start__title-jumping">t</span>
                <span className="start__title-jumping">i</span>
                <span className="start__title-jumping">n</span>
                <span className="start__title-jumping">g&nbsp;</span>

                <span className="start__title-jumping">b</span>
                <span className="start__title-jumping">u</span>
                <span className="start__title-jumping">b</span>
                <span className="start__title-jumping">b</span>
                <span className="start__title-jumping">l</span>
                <span className="start__title-jumping">e</span>
                <span className="start__title-jumping">s</span>
            </h1>
            <Link
                to={goToGameOptions}
                className="start__link" id="start"
            >
                Start game
            </Link>
        </div>
    );
}
