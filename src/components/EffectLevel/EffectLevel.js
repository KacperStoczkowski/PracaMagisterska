import React from "react";
import './EffectLevel.css';

export const EffectLevel = () => {

    return (
        <div className="effectLevel">
            <input className="effectLevelInput" type="number"></input>
            <label className="effectLabel">Poziom efektu</label>
        </div>
    )
};