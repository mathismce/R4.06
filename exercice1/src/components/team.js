import React from 'react';
import "../base.css";
import Card from './card';

export default function Teams({title, heading, description}) {

    let users = [
        { name: "Edouard Jérémie", profession: "CEO", image: "./edouard.jpg" },
        { name: "Amélie Christelle", profession: "Directeur des recherches", image: "./amelie.avif" }, 
        { name: "Gilles Damien", profession: "Directeur commercial", image: "./gilles.jpg" }
    ];
    
    return (
        <div>
            <header className="team__header">
                <h2 className="team__title">{title}</h2>
            </header>
            <section className="team__content">
                <h1 className="team__heading">{heading}</h1>
                <p className="team__description">{description}</p>
                <ul className="gallery">
                    {users.map((user, index) => (
                        <Card key={index} name={user.name} profession={user.profession} image={user.image} />
                    ))}
                </ul>
            </section>
        </div>

    );
}

