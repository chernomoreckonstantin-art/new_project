<script setup>
import ExcursionCard from './components/ExcursionCard.vue';
import UserCard from './components/ExcursionCard.vue'

import { excursions } from './data/excursions.js';
</script>

<template>
  <main class="cards">
    <ExcursionCard
      v-for="excursion in excursions"
      :key="excursion.id"
      :excursion="excursion"
    />
  </main>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  max-width: 1320px;
  margin: 0 auto;
  padding: 40px 20px;
}

@media (max-width: 1100px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>