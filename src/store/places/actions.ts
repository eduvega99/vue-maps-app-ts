import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', coords),
            (error) => {
                console.error(error)
                throw new Error('No geolocation');
            }
        )
    },

    async searchPlacesByTerm({commit, state}, query: string) {
        console.log('vuex', query);
    }
}


export default actions;