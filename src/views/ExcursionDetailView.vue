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
      <div class="tags">
          <span
            v-for="tag in excursion.tags"
            :key="tag"
            class="tag"
          >
            {{ tag }}
          </span>
        </div>
    </div>
    <div class="content">
      <h1>{{ excursion.title }}</h1>
      <p>{{ excursion.adultPrice }}</p>
      <p>{{ excursion.route }}</p>
      <p>{{ excursion.duration }}</p>
      <p>{{ excursion.group }}</p>
      <p>{{ excursion.dates }}</p>
     
    </div>
  </div>
</template>

<style>
.image-container{
  position: relative;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;  
}
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
  max-width: 1700px;
  background: white;
  gap: 24px;
  border-radius: 30px;
  
}
.content{
  padding: 30px;
  border-radius: 30px;
  
}
.image{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}
.tag {
  padding: 5px 12px;

  background: white;
  border-radius: 20px;

  font-size: 13px;
}
.tags {
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  z-index: 1;
}

</style>