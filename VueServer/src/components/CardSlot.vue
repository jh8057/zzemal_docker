<template>
  <div class="card" :id="title" @click="toggle">
    <div class="container">
      <img :src="imgSrc" />
      <div class="text__Container">
        <h2 class="text">
          <b>{{ title }}</b>
        </h2>
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

.container img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
}
.text__Container {
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
}

.text {
  margin: 0;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
}

.container--active {
  height: 400px;
  width: 80%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
