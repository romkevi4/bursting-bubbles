import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBtn.css';


export default function NavigationBtn({ goToPage, nameBtn, modifierClass }) {
    return (
        <div className="navigation">
            <Link
                to={goToPage}
                className={`navigation-btn ${modifierClass}`}
            >
                {nameBtn}
            </Link>
        </div>
    )
}