import React from 'react';

import './number-input.css';
// Update this component
export default function NumberInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" id={props.id} value={props.value} onChange={props.onChange} />
        </div>
    );
}