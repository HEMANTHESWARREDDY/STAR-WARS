import React from 'react';
import Planet from './Planet';
import './PlanetsList.css';

const PlanetsList = ({ planets }) => {
    return (
        <div className="planets-list">
            {planets.map(planet => (
                <Planet key={planet.name} planet={planet} />
            ))}
        </div>
    );
};

export default PlanetsList;
