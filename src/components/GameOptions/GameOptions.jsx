import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../Title/Title';
import NavigationBtn from '../NavigationBtn/NavigationBtn';
import './GameOptions.css';


export default function GameOptions({ goToStart }) {
    return (
        <div className="game-options">
            <Title>
                Select game time
            </Title>

            <div className="game-options__box-btn">
                <button className="game-options__time-btn" data-time="10">
                    10 sec
                </button>

                <button className="game-options__time-btn" data-time="20">
                    20 sec
                </button>

                <button className="game-options__time-btn" data-time="30">
                    30 sec
                </button>

                <button className="game-options__time-btn" data-time="60">
                    60 sec
                </button>
            </div>

            <NavigationBtn
                goToPage={goToStart}
                nameBtn="Back"
                modifierClass="navigation-btn_position_left"
            />
        </div>
    );
}
