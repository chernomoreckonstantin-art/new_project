<script setup>
import ExcursionCard from '../components/ExcursionCard.vue';
import { excursions } from '../data/excursions';
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
  background-color:rgb(241, 234, 224);

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
<style>
#app {
  background-color:rgb(241, 234, 224);
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

</style>