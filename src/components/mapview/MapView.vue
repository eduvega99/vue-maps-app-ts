<script lang="ts" src="./MapView" />

<template>
  <div
    v-if="!isUserLocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="text-center">
      <h3>Espere por favor...</h3>
      <span>Localizacion</span>
    </div>
  </div>

  <div
    v-show="isUserLocationReady"
    class="map-container"
    ref="mapElement"
  />
</template>

<style scoped>
.loading-map {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 9999;
}

.map-container {
  background-color: red;
  height: 100vh;
  position: fixed;
  width: 100vw;
}
</style>
