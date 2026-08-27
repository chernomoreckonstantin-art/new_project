<script setup>
const props = defineProps({
  excursion: {
    type: Object,
    required: true
  }
})

const formatDate = (date) => {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}
</script>

<template>
  <article class="card">

    <!-- Картинка -->
    <div class="image-wrapper">

      <img
        :src="props.excursion.image"
        :alt="props.excursion.title"
        class="card-image"
      />

      <!-- Теги -->
      <div class="tags">
        <span
          v-for="tag in props.excursion.tags"
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>

    </div>

    <!-- Содержимое карточки -->
    <div class="card-content">

      <!-- Дата и время -->
      <time class="date">
        {{ formatDate(props.excursion.date) }}
      </time>

      <!-- Заголовок -->
      <h2 class="title">
        {{ props.excursion.title }}
      </h2>

      <!-- Описание -->
      <p class="description">
        {{ props.excursion.description }}
      </p>

      <!-- Цены -->
      <div class="prices">

        <div class="price">
          <strong>
            {{ props.excursion.adultPrice }} ₽
          </strong>

          <small>
            Взрослый
          </small>
        </div>

        <div class="price">
          <strong>
            {{ props.excursion.childPrice }} ₽
          </strong>

          <small>
            Детский
          </small>
        </div>

      </div>

    </div>

  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background: white;
  border-radius: 18px;

  overflow: hidden;
}

.image-wrapper {
  position: relative;
}

.card-image {
  display: block;

  width: 100%;
  height: 300px;

  object-fit: cover;
}

.tags {
  position: absolute;

  top: 12px;
  left: 12px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 5px 12px;

  background: white;
  border-radius: 20px;

  font-size: 13px;
}

.card-content {
  display: flex;
  flex-direction: column;

  flex: 1;

  padding: 18px;
}

.date {
  margin-bottom: 8px;

  font-size: 14px;
  font-style: italic;
}

.title {
  margin: 0 0 10px;

  font-size: 22px;
  line-height: 1.2;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Описание */

.description {
  margin: 0;

  font-size: 15px;
  line-height: 1.4;

  /*
    Максимум 3 строки.
  */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Цены */

.prices {
  display: flex;
  gap: 10px;

  margin-top: auto;
  padding-top: 20px;
}

.price {
  padding: 9px 14px;

  background: #f4ecdf;
  border-radius: 12px;

  text-align: center;
}

.price strong {
  display: block;

  font-size: 15px;
}

.price small {
  display: block;

  margin-top: 2px;

  font-size: 11px;
}
</style>