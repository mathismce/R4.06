// TRES IMPORTANT POUR USE STATE
import React, { useState } from 'react';
import "../base.css";
import Card from './card';

export default function Page({ title, description, offers }) {

    //définit l'état du Toggle a faux, au départ.
    const [checked, setToggleChecked] = useState(false);
   
    //met a jour l'état du TOGGLE (!checked) à true.
    function handleToggleChange () {
        setToggleChecked(!checked);
       
    };

    return (
        <div className="offer">
            <div className="offer-section">
                <h2 className="offer-section__title">{title}</h2>
                <p className="offer-section__description">{description}</p>
                <label className="switch">
                    <input type="checkbox" onChange={handleToggleChange} />
                    <span className="slider round"></span>
                </label>
                <p className='toggle'>{checked ? "Location" : "Achat"}</p>
                <div className="box">
                    {offers.map((offer, index) => (
                        <div key={index}>
                            <Card
                                name={offer.name}
                                price={checked ? offer.price.leasing : offer.price.buy}
                                adv={offer.adv}
                                direction={offer.direction}
                                btn={offer.btn}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
