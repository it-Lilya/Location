import React from "react";
import './CardsView.css';

export default function CardsView({cards}) {
    let index = 0;
    return (
            cards.map((item) => (
                <div className='ShopCard' key={index++}>
                    <img src={item.img} alt='' style={{width: "90px"}}/>
                    <div className="name">{item.name}</div>
                    <div className="color">{item.color}</div>
                    <div className="price" style={{color: "#B22222"}}>${item.price}</div>
                    <input className="btn" type="button" value="add to card" />
                </div>
        ))
    )
}


