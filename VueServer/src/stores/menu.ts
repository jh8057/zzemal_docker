import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const menuList = ref([
    {
      title: 'test1',
      content:
        'test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1',
      imgSrc: '/test1.jpg'
    },
    {
      title: 'test2',
      content: 'test2',
      imgSrc: '/test1.jpg'
    }
  ])

  function addMenu(menu: any) {
    menuList.value.push(menu)
  }

  function deleteMenu(index: number) {
    menuList.value.splice(index, 1)
  }

  return { menuList, addMenu, deleteMenu }
})
