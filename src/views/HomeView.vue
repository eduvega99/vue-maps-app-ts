<template>
  <div class="home">
    <MapView />
    <MyLocationButton />
    <SearchBar />
  </div>
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

import MapView from '@/components/mapview/MapView.vue';
import MyLocationButton from '@/components/my-location-button/MyLocationButton.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';


export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationButton, SearchBar },
  setup() {
    usePlacesStore();
  }
});
</script>
