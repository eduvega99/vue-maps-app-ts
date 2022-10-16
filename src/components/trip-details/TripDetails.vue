<script lang="ts" src="./TripDetails.ts" />

<template>
  <div
    v-if="distance && duration"
    class="trip-container column"
  >
    <div class="col">
      Distancia: <strong>{{ distance }} kms</strong>
    </div>
    <div class="col">
      Duración: <strong>{{ duration }} minutos</strong>
    </div>
  </div>
</template>

<style scoped>
.trip-container {
  background-color: white;
  border-radius: 10px;
  bottom: 100px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  left: 30px;
  padding: 10px;
  position: fixed;
  width: 300px;
}

strong {
  color: #42b983;
}
</style>