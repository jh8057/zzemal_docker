<template>
  <div class="about">
    <h1>메뉴</h1>
    <div class="menuList">
      <card-slot
        v-for="menu in menuList"
        :key="menu.title"
        :title="menu.title"
        :content="menu.content"
        :imgSrc="menu.imgSrc"
      ></card-slot>
      <card-slot-add />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardSlot from '@/components/CardSlot.vue'
import CardSlotAdd from '@/components/CardSlotAdd.vue'
// import { useMenuStore } from '@/stores/menu'
import { ref } from 'vue'

let menuList: any = ref([])
const getMenuList = async () => {
  const menu = await fetch('http://localhost:3001/api/menu')
    .then((res) => res.json())
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log('err', err)
      return { err: 'err' }
    })

  console.log('menu', menu)
  menuList.value = menu
}
getMenuList()
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
