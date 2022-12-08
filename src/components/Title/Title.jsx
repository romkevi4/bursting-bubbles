import React from 'react';
import './Title.css';


export default function Title({ children }) {
    return (
        <h2 className="title">{children}</h2>
    )
}