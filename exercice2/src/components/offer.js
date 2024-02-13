import React from 'react';
import "../base.css";
import Card from './card';

export default function Page(page) {

    return (
        <div class="offer">
            <div class="offer-section">
                <h2 class="offer-section__title">{page.title}</h2>
                <p class="offer-section__description">{page.description}</p><div class="offer-section">
                <h2 class="offer-section__title">{page.title2}</h2>
                <p class="offer-section__description">{page.description2}</p>
                </div>
                {page.offers.map((offer, index) => (
                        <li key={index}>
                        <Card name={offer.name} price={offer.price} adv={offer.adv} direction={offer.direction} button={offer.btn} /></li>
                    ))}
            </div>    
        </div>

    );
}

