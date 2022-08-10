import React from "react";
import './Menu.css';

const createLookUpArray = (value) => [...Array(256).keys()].map((_, index) => {
    const val = index + value;

    if (val > 255) {
        return Math.min(val, 255);
    } else if (val < 0) {
        return Math.max(val, 0);
    } else {
        return val;
    }
});

export const Menu = ({ items = [], onSelect, value }) => {
    return (
        <select name="effect-selector" onChange={onSelect} value={value}>
            <>
                <option value="">Wybierz efekt</option>
                {
                    items.map((item) => (
                        <option value={item.type} key={item.type}>{item.title}</option>
                    ))
                }
            </>
        </select>
    )
};