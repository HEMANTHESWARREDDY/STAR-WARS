import React from 'react';
import './Planet.css';

const Planet = ({ planet }) => {
    return (
        <div className="planet-card">
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
            <h3>Residents:</h3>
            <ul>
                {planet.residents.map(resident => (
                    <li key={resident.url}>{resident.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Planet;
