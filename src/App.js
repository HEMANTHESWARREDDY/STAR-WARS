import React, { useState, useEffect } from 'react';
import { fetchPlanets } from './services/swapiService';
import PlanetsList from './components/PlanetsList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import PlanetDetail from './components/PlanetDetail';
import './App.css';

const App = () => {
    const [planets, setPlanets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
            const data = await fetchPlanets(currentPage);
            setPlanets(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePlanetClick = (planet) => {
        setSelectedPlanet(planet);
    };

    const filteredPlanets = planets.filter((planet) =>
        planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">
            <h1>Star Wars Planets Directory</h1>
            <SearchBar value={searchTerm} onChange={handleSearchChange} />
            <PlanetsList planets={filteredPlanets} onPlanetClick={handlePlanetClick} />
            <Pagination onNextPage={handleNextPage} onPrevPage={handlePrevPage} currentPage={currentPage} />
            {selectedPlanet && (
                <PlanetDetail planet={selectedPlanet} />
            )}
        </div>
    );
};

export default App;
