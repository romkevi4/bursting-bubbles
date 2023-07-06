import Bubbles from '../Bubbles/Bubbles';
import NavigationBtn from '../NavigationBtn/NavigationBtn';

import './Start.css';
import 'animate.css';


export default function Start({ goToGameOptions }) {
    return (
        <div className="start">
            <h1 className="start__title animate__animated animate__rubberBand">
                Bursting bubbles
            </h1>

            <NavigationBtn
                goToPage={goToGameOptions}
                nameBtn="Start game"
            />

            <Bubbles />
        </div>
    );
}
