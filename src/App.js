import React, { useState, useEffect } from 'react';
import { fetchPlanets, fetchResident } from './services/swapiService';
import PlanetsList from './components/PlanetsList';
import Pagination from './components/Pagination';

function App() {
    const [planets, setPlanets] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (page = 1) => {
        try {
            const data = await fetchPlanets(page);
            setPlanets(data.results);
            setNextPage(data.next);
            setPrevPage(data.previous);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleNextPage = () => {
        if (nextPage) {
            fetchData(getPageNumber(nextPage));
        }
    };

    const handlePrevPage = () => {
        if (prevPage) {
            fetchData(getPageNumber(prevPage));
        }
    };

    const getPageNumber = (url) => {
        const pageNumber = url.match(/page=(\d+)/);
        return pageNumber ? parseInt(pageNumber[1]) : 1;
    };

    return (
        <div className="app">
            <h1>Star Wars Planets Directory</h1>
            <PlanetsList planets={planets} />
            <Pagination onNextPage={handleNextPage} onPrevPage={handlePrevPage} />
        </div>
    );
}

export default App;
