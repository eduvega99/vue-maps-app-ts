<template>
  <div class="home">
    <MapView />
    <MyLocationButton />
  </div>
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

import MapView from '@/components/mapview/MapView.vue';
import MyLocationButton from '@/components/my-location-button/MyLocationButton.vue';


export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationButton },
  setup() {
    usePlacesStore();
  }
});
</script>
