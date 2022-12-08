import React from 'react';

import Title from '../Title/Title';
import Circle from '../Circle/Circle';
import Score from '../Score/Score';
import NavigationBtn from '../NavigationBtn/NavigationBtn';

import './Game.css'


export default function Game({ isGame, goToStart, goToGameOptions }) {
    return (
        <div className="game">
            <Title>
                Time left:&nbsp;
                <span className="game__title-timer" id="time">00:00</span>
            </Title>

            <div className="game__board" id="board">
                {/*{*/}
                {/*    isGame ? <Circle /> : <Score />*/}
                {/*}*/}

                <Score />
            </div>

            <NavigationBtn
                goToPage={goToGameOptions}
                nameBtn="Back"
                modifierClass="navigation-btn_position_left"
            />

            <NavigationBtn
                goToPage={goToStart}
                nameBtn="Home"
                modifierClass="navigation-btn_position_right"
            />
        </div>
    );
}
