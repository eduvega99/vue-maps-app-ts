import { defineComponent, ref, watch } from 'vue';
import { useMapStore, usePlacesStore } from '@/composables';
import { Feature } from '@/interfaces/places';


export default defineComponent({
    name: 'SearchResult',
    setup() {

        const { isLoadingPlaces, places, userLocation } = usePlacesStore();
        const { map, setPlaceMarkers, getRoutesBetweenPoints } = useMapStore();
        const activePlace = ref('');

        watch(places, (newPlaces) => {
            activePlace.value = '';
            setPlaceMarkers(newPlaces);
            console.log(newPlaces);

        });

        return {
            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClicked: (place: Feature) => {
                activePlace.value = place.id;
                const [lng, lat] = place.center;
                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                });
            },

            getRouteDirections: (place: Feature) => {
                if (!userLocation.value) return;
                const [lng, lat] = place.center;
                const start: [number, number] = [ ...userLocation.value ];
                const end: [number, number] = [lng, lat];
                getRoutesBetweenPoints(start, end);
            }
        }
    }
});