import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const menuList = ref([])

  async function getMenuList() {
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
    menuList.value = menu.menuList

    return menuList
  }

  function addMenu(menu: any) {
    // menuList.value.push(menu)
  }

  function deleteMenu(index: number) {
    // menuList.value.splice(index, 1)
  }

  return { menuList, getMenuList, addMenu, deleteMenu }
})
