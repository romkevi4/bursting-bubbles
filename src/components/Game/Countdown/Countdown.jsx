import React from 'react';

import './Countdown.css';

export default function Countdown({ value }) {
    return (
        <div className="countdown">
            <p className="countdown__value">{value}</p>
        </div>
    );
}
