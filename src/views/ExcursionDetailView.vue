<script setup>
import { useRoute } from 'vue-router';
import { excursions } from '../data/excursions';


const route = useRoute();

const excursion = excursions.find(
    excursion => excursion.id === Number(route.params.id)
);

console.log(route.params.id);
</script>


<template>
  <div>
    <RouterLink to="/" class="back-link">← Назад к списку</RouterLink>
    <h1>{{ excursion.title }}</h1>

    <img
      :src="excursion.image"
      :alt="excursion.title"
    >

    <p>{{ excursion.description }}</p>
    <p>{{ excursion.adultPrice }} ₽</p>
    <p>{{ excursion.childPrice }} ₽</p>
  </div>
</template>
<style>
.back-link{
  .back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
}

.back-link:hover {
  text-decoration: underline;
}
}
</style>