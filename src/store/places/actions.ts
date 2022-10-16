import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

import { searchApi } from '@/apis';
import { PlacesResponse } from '@/interfaces/places';


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
        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });
        console.log(resp.data.features);
    }
}


export default actions;