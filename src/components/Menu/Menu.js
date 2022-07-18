import React from "react";
import './Menu.css';

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