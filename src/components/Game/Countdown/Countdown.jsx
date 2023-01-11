import React from 'react';

import './Countdown.css';

export default function Countdown({ value, isCountdown }) {
    return (
        <div className={isCountdown ? 'countdown countdown_active' : 'countdown'}>
            <p className="countdown__value">{value}</p>
        </div>
    );
}
