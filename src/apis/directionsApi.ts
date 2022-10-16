import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving/',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZWR1dmVnYTk5IiwiYSI6ImNreGRrYzhubTBzcTYzMG1tNDZmamlndXEifQ.SMEa2HqhckApopx2hdyLQw'
    }
});

export default directionsApi;
