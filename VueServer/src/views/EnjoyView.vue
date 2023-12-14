<template>
  <div>
    <h1>놀거리</h1>
    <canvas id="riveC" width="400" height="400"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Rive } from '@rive-app/canvas'

onMounted(() => {
  console.log('mounted')

  const reRender = () => {
    new Rive({
      canvas: document.getElementById('riveC') as HTMLCanvasElement,
      src: '/src/assets/riveIcon.riv',
      autoplay: true
    })
  }
  // loop reRender
  setInterval(() => {
    reRender()
  }, 2000)

  // let renderer: any = null
  // const reRender = () => {
  //   if (false) {
  //     cancelAnimationFrame(renderer)
  //   }

  //   new Rive({
  //     canvas: document.getElementById('riveC') as HTMLCanvasElement,
  //     src: '/src/assets/riveIcon.riv',
  //     autoplay: true
  //   })
  //   renderer = requestAnimationFrame(reRender)
  // }
  // requestAnimationFrame(reRender)
})
</script>
