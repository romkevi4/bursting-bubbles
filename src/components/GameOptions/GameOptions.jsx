import React from 'react';
import './GameOptions.css'


export default function GameOptions() {
    return (
        <>
            <h2>Выберите время</h2>
            <ul className="time-list" id="time-list">
                <li>
                    <button className="time-btn" data-time="10">
                        10 сек
                    </button>
                </li>

                <li>
                    <button className="time-btn" data-time="20">
                        20 сек
                    </button>
                </li>

                <li>
                    <button className="time-btn" data-time="30">
                        30 сек
                    </button>
                </li>

                <li>
                    <button className="time-btn" data-time="60">
                        60 сек
                    </button>
                </li>
            </ul>
        </>
    );
}
