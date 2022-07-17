import React from "react";
import './Menu.css';

export const Menu = () => {

    return (
        <div>
            <ul className="navigation">
                <li><button className="effect">Zmiana jasności</button></li>
                <li><button className="effect">Zmiana kontrastu</button></li>
                <li><button className="effect">Zmiana ekspozycji</button></li>
                <li><button className="effect">Korekcja gamma</button></li>
                <li><button className="effect">Negatyw</button></li>
                <li><button className="effect">Sepia</button></li>
                <li><button className="effect">Pow/Pomn sąsiedztwo</button></li>
                <li><button className="effect">Pow/Pomn interpolacja</button></li>
            </ul>
        </div> 
    )
};