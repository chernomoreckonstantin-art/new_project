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
  <RouterLink to="/" class="back-link">← Назад к списку</RouterLink>
    <div class = "detail">
      <div class="image-container">
      <img class = "image"
      :src="excursion.DitImage"
      :alt="excursion.title"
    >
    </div>
    <div class="content">
      <h1>{{ excursion.title }}</h1>
      <p>{{ excursion.description }}</p>
      <p>{{ excursion.adultPrice }} ₽</p>
      <p>{{ excursion.childPrice }} ₽</p>
      <p>{{ excursion.route }}</p>
      <p>{{ excursion.duration }}</p>
      <p>{{ excursion.group }}</p>
      <p>{{ excursion.dates }}</p>
    </div>
  </div>
</template>
<style>
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
.detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1500px;
  
  gap: 24px;
  border-radius: 30px;
  
}
.content{
  padding: 30px;
  background: white;
  border-radius: 30px;
  
}
.image{
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
}
</style>