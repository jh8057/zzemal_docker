<template>
  <div class="card" :id="title" @click="toggle">
    <div class="container">
      <div class="container__left">
        <img :src="imgSrc" class="container__left--img" :id="title + 'img'" />
      </div>
      <div class="container__right">
        <h3 class="text">
          <b>{{ title }}</b>
        </h3>
        <p class="text">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: String,
  content: String,
  imgSrc: String
})

const imgSrc = computed(() => {
  return 'src/img/' + props.imgSrc
})

const toggle = () => {
  const container = document.getElementById(props.title)
  if (container) {
    container.classList.toggle('container--active')
  }

  const img = document.getElementById(props.title + 'img')
  if (img) {
    img.classList.toggle('container--active__img')
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(211, 255, 210, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: #f2f2f2;
  margin: 20px;
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card:hover {
  /** when i mouse hover, card animation scale up */
  transform: scale(1.1);
  background-color: hsla(160, 100%, 37%, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.container--active {
  height: 400px;
}

.container__left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.container__left--img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
}
.container__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: 0.3s;
  flex-grow: 1;
}

.text {
  margin: 0;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 15px;
}

@media screen and (max-width: 600px) {
  .card {
    height: 250px;
  }

  .container {
    flex-direction: column;
  }

  .container--active {
    height: 800px;
  }

  .text {
    position: relative;
    overflow: hidden;
    line-height: 25px;
  }

  .container__left--img {
    height: 150px;
  }
  .container--active__img {
    height: 400px;
  }
}
</style>
