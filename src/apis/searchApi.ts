import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 3,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZWR1dmVnYTk5IiwiYSI6ImNreGRrYzhubTBzcTYzMG1tNDZmamlndXEifQ.SMEa2HqhckApopx2hdyLQw'
    }
});

export default searchApi;