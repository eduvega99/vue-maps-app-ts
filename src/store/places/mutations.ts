import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLngLat(state: PlacesState, coords: GeolocationCoordinates) {
        state.userLocation = [coords.longitude, coords.latitude];
        state.isLoading = false;
    }
}


export default mutation;