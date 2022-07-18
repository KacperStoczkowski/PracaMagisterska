import React from "react";
import './EffectLevel.css';

export const EffectLevel = ({ onChange, value }) => {

    return (
        <div className="effectLevel">
            <input className="effectLevelInput" type="number" onChange={onChange} value={value} />
            <label className="effectLabel">Poziom efektu</label>
        </div>
    )
};