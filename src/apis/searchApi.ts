import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZWR1dmVnYTk5IiwiYSI6ImNreGRrYzhubTBzcTYzMG1tNDZmamlndXEifQ.SMEa2HqhckApopx2hdyLQw'
    }
});

export default searchApi;