import React from 'react';

import './operation.css';

export default function Operation(props) {
    return (
        <button className ='operation-button' onClick={props.onButtonClick}>
            {props.text}
        </button>
    )
}