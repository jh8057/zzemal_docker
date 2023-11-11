<template>
  <div class="about">
    <h1>메뉴</h1>
    <div class="menuList">
      <card-slot title="test" :content="firstContent"></card-slot>
      <card-slot title="test" content="test1"></card-slot>
      <card-slot title="test" content="test1"></card-slot>
      <card-slot title="test" content="test1"></card-slot>
      <card-slot title="test" content="test1"></card-slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardSlot from '@/components/CardSlot.vue'

const firstContent =
  'test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1'
</script>
<style>
.about {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menuList {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
