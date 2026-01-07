"use client"

import {useState} from 'react';

const buttons = ["Tafla", "Listi"]
export default function TableListButtons({active, onChange}){
    const [active, setActive] = useState(buttons[0])

    return (
        <div className="table-list-buttons">
            {buttons.map(button =>
                <button
                    
                    active={active === button} onClick={()=> setActive(button)}>
                    {button}
                </button>
            )}
        </div>
    );
}