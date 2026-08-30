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