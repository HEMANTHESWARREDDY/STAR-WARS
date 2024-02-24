import React from 'react';
import './PlanetDetail.css';

const PlanetDetail = ({ planet }) => {
    const getNotableResidents = (planetName) => {
        const notableResidentsMap = {
            Tatooine: ["Luke Skywalker", "Anakin Skywalker", "Obi-Wan Kenobi", "Jabba the Hutt", "Watto"],
            Endor: ["Chewbacca", "Wicket W. Warrick", "Leia Organa", "Han Solo", "C-3PO"],
            Hoth: ["Han Solo", "Princess Leia", "Luke Skywalker"],
            Naboo: ["Padmé Amidala", "Queen Jamillia", "Jar Jar Binks", "Boss Nass"],
            Coruscant: ["Sheev Palpatine", "Darth Maul", "Yoda", "Mace Windu", "Qui-Gon Jinn"],
            Alderaan: ["Bail Organa", "Breha Organa"],
            Mustafar: ["Darth Vader", "Emperor Palpatine"],
            Kamino: ["Jango Fett", "Boba Fett"],
            Kashyyyk: ["Yoda", "Chewbacca"],
            Geonosis: ["Count Dooku", "Poggle the Lesser"],
            Jakku: ["Rey", "Unkar Plutt"],
            Bespin: ["Lando Calrissian"],
            Dathomir: ["Darth Maul", "Asajj Ventress"],
            Dagobah: ["Yoda"],
            Felucia: ["Aayla Secura"],
            Ryloth: ["Cham Syndulla", "Hera Syndulla"],
            Sullust: ["Nien Nunb"],
            Tatooine: ["Luke Skywalker", "Anakin Skywalker", "Obi-Wan Kenobi"],
            Yavin_IV: ["Baze Malbus", "Chirrut Îmwe"],
        };
        
        return notableResidentsMap[planetName] || [];
    };

    const notableResidents = getNotableResidents(planet.name);

    return (
        <div className="planet-detail">
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
            {notableResidents.length > 0 && (
                <div>
                    <h3>Residents:</h3>
                    <ul>
                        {notableResidents.map((resident, index) => (
                            <li key={index}>{resident}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PlanetDetail;
