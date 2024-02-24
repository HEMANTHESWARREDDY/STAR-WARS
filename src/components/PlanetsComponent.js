import React from 'react';
import './PlanetsComponent.css';


const PlanetsComponent = ({ planets }) => {
    return (
        <div className="planets-component">
            <h2>Planet Names</h2>
            <ul>
                {planets.map((planet, index) => (
                    <li key={index}>{planet.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlanetsComponent;
