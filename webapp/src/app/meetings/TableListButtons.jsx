"use client"

import {useState} from 'react';

const buttons = ["Listi","Tafla"]
export default function TableListButtons({active, setActive}){
    return (
        <div className="table-list-buttons">
            {buttons.map(button =>
                <button
                    key={button}
                    type="button"
                    data-active={active === button}   
                    onClick={()=> setActive(button)}>
                    {button}
                </button>
            )}
        </div>
    );
}