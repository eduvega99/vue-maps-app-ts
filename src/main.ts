import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZWR1dmVnYTk5IiwiYSI6ImNreGRrYzhubTBzcTYzMG1tNDZmamlndXEifQ.SMEa2HqhckApopx2hdyLQw';

if (!navigator.geolocation) {
    alert('Tu navegador no soporta Geolocalización');
    throw new Error('Tu navegador no soporta Geolocalización');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')