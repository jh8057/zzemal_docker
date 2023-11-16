<template>
  <div class="card">
    <div class="container__add">
      <input type="file" @change="uploadImage" />
      <div class="text__Container">
        제목 : <input class="addTitle" v-model="title" /> 내용 :<textarea
          class="addContent"
          v-model="content"
        />
        <button @click="submitToServer">
          <b>추가</b>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMenuStore } from '@/stores/menu'
import axios from 'axios'

const store = useMenuStore()

const totalLength = computed(() => store.menuList.length)

let title = ''
let content = ''
let imgSrc = ''
const uploadImage = (event: any) => {
  /** when i input image, save image and preview image on id */
  const reader = new FileReader()

  reader.onload = function (event) {
    var img = document.createElement('img')
    img.setAttribute('src', event.target.result)
    img.setAttribute('class', 'addedImg')
    document.querySelector('.container__add').appendChild(img)
  }

  imgSrc = event.target.files[0]
  reader.readAsDataURL(event.target.files[0])
}

const submitToServer = async () => {
  const formData = new FormData()
  formData.append('image', imgSrc)

  let result = await axios
    .post('http://localhost:3001/api/menu/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      params: {
        title: title,
        content: content
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))

  console.log('result', result)
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

.container__add {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}

.image_container img {
  max-width: 10px;
  max-height: 10px;
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
.addedImg {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  object-fit: cover;
}

.addTitle {
  margin: 0;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
}

.addContent {
  margin: 0;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
