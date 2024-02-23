import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/';

export const fetchPlanets = async (page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}planets/?format=json&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }
};

export const fetchResident = async (residentUrl) => {
    try {
        const response = await axios.get(residentUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching resident:', error);
        throw error;
    }
};
