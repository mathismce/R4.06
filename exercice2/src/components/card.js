'use Client';
import "../base.css"

function Advantage({ name, isChecked }) {
    if (isChecked) {
        return (
            <>
                <span class="advantage__checkmark">✓</span>
                <p class="advantage__text">{name}</p>
            </>  
        )
    }
    else {
        return (
            <>
                <span class="advantage__checkmark"> &nbsp;</span>
                <p class="advantage__text">{name}</p>
            </>
            
        )   
    }
}

export default function Card(offer) {
    return (
        <ul class="offer-box">
            <li class="offer-box__header">
                <h3 class="offer-box__name">{offer.name}</h3>
                <p class="offer-box__price">{offer.price}</p>
            </li>
            {offer.adv.map((adv, index) => (
                <li class="advantage">
                    <Advantage key={index} name={adv.name} isChecked={adv.isChecked}/>
                </li>
                
            ))}

            <li >
                <a href={offer.direction} class="header__lien"><button class="header__button btn--hero__nav">{offer.btn}</button>
                </a>
            </li>
        </ul>
    )
}

