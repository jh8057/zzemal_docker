<template>
  <div class="about">
    <h1>메뉴</h1>
    <div class="menuList">
      <card-slot
        v-for="menu in store.menuList"
        :key="menu.title"
        :title="menu.title"
        :content="menu.content"
        :imgSrc="menu.imgSrc"
      ></card-slot>
      <card-slot-add></card-slot-add>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardSlot from '@/components/CardSlot.vue'
import CardSlotAdd from '@/components/CardSlotAdd.vue'
import { useMenuStore } from '@/stores/menu'

const store = useMenuStore()
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
