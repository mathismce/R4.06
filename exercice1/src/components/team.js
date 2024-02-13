import React from 'react';
import "../base.css";
import Card from './card';

export default function Teams(team) {

    return (
        <div>
            <header className="team__header">
                <h2 className="team__title">{team.title}</h2>
            </header>
            <section className="team__content">
                <h1 className="team__heading">{team.heading}</h1>
                <p className="team__description">{team.description}</p>
                <ul className="gallery">
                    {team.users.map((user, index) => (
                        <li key={index}>
                        <Card name={user.name} profession={user.profession} image={user.image} /></li>
                    ))}
                </ul>
            </section>
        </div>

    );
}

