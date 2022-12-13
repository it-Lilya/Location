import React from "react";
import './ListView.css';

export default function ListView({items}) {
    let index = 0;
    return (
        <div className="parent">
        {items.map((item) => (
            <div className='ShopItem' key={index++}>
                <div className="text">
                    <p className="name">{item.name}</p>
                    <p className="color">{item.color}</p>
                </div>
                <img src={item.img} alt='' style={{width: "100%"}} />
                <div className="container">
                    <p className="price">${item.price}</p>
                    <input className="btn" type="button" value="add to card" />
                </div>
            </div>
    ))}
    </div>
)
}