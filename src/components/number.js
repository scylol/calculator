import React from 'react';

import './number.css';

export default function Number(props) {
    return (
        <button className ='number-button' onClick= {props.onButtonClick}>
            {props.text}
        </button>
    )
}