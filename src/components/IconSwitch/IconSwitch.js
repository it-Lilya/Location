import React from "react";
import './IconSwitch.css';

export default function IconSwitch ({icon, onSwitch}) {
    return (
        <div className='contain'>
             <button className="material-icons" onClick={onSwitch}>{icon}</button>  
        </div>
    )
}