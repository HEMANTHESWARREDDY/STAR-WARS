import React from 'react';
import Planet from './PlanetDetail';
import './PlanetsList.css';

const PlanetsList = ({ planets, onPlanetClick }) => {
    return (
        <div className="planets-list">
            {planets.map((planet) => (
                <div key={planet.name} onClick={() => onPlanetClick(planet)}>
                    <Planet planet={planet} />
                </div>
            ))}
        </div>
    );
};

export default PlanetsList;
