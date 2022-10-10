import { defineComponent, onMounted, ref, watch } from 'vue';

import { usePlacesStore } from '@/composables';
import Mapboxgl from 'mapbox-gl';


export default defineComponent({
    name: 'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>();

        const { userLocation, isUserLocationReady } = usePlacesStore();

        const initMap = async () => {
            if (!mapElement.value) throw new Error('div element does not exist');
            if (!userLocation.value) throw new Error('user location does not exist');

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: userLocation.value,
                zoom: 15,
            });

            const myLocationPopUp = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`<b>Mi ubicación</b><p>Actualmente en Arucas</p>`);

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopUp)
                .addTo(map);
        }

        onMounted(() => {
            if (isUserLocationReady.value)
                return initMap();
        });

        watch(isUserLocationReady, (newValue) => {
            if (isUserLocationReady.value) initMap();
        });

        return {
            isUserLocationReady,
            mapElement
        }
    }
});