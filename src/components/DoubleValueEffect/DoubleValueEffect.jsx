import React, {useEffect, useState} from 'react';
import './double-value-effect.css';

export const DoubleValueEffect = ({ onChange, value = { scaleX: 0, scaleY: 0} }) => {
    const [localValue, setLocalValue] = useState(value);

    useEffect(() => {
        onChange && onChange(localValue);
    }, [localValue]);

    return (
        <div className="wrapper">
            <div>
                <label htmlFor="scaleX">Poziom skali X: </label>
                <input type="number" id="scaleX" onChange={(e) => {
                    setLocalValue({
                        ...localValue,
                        scaleX: e.target.value
                    })
                }} value={value.scaleX}/>
            </div>

            <div>
                <label htmlFor="scaleY">Poziom skali Y: </label>
                <input type="number" id="scaleY" onChange={(e) => {
                    setLocalValue({
                        ...localValue,
                        scaleY: e.target.value
                    })
                }} value={value.scaleY}/>
            </div>
        </div>
    )
};