<script lang="ts" src="./SearchBar.ts" />

<template>
  <div class="searchbar-container">
    <input
      v-model="searchTerm"
      type="text"
      class="form-control"
      placeholder="Buscar lugares..."
    >
    <SearchResults />
  </div>
</template>

<style scoped>
.searchbar-container {
  background-color: white;
  border-radius: 10px !important;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  left: 30px;
  overflow: hidden;
  padding: 5px;
  position: fixed;
  top: 30px;
  width: 250px;
  z-index: 999;
}
</style>