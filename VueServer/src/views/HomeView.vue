<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <main>
    <HelloWorld />
    <p>양재 최고 핫플레이스에 오신 걸 환영합니다!</p>
    <p>이곳은 지구 최강 멋진 공간입니다.</p>

    <section>
      <h2>최고의 볼거리</h2>
      <p>이곳은 볼거리가 풍성합니다!</p>
      <ul>
        <li>20층 높이 양재 시티뷰</li>
        <li>아무것도 꾸미지 않았지만 있을건 다 있는 집</li>
      </ul>
    </section>

    <section>
      <h2>최고의 먹을거리</h2>
      <p>
        이곳은 먹을거리가 상당히 많습니다. 스위스에서 온 초콜릿부터 시작해서 강남 핫플 핸드드립
        커피, 20년 전통 박곡 맛집에서 가져온 열무김치 까지요!

        <br />
        <RouterLink to="/menu">메뉴구경하기</RouterLink>
      </p>
    </section>

    <section>
      <h2>최고의 즐길거리</h2>
      <p>이곳은 즐길거리가 상당하답니다..?!</p>
      <ul>
        <li>집주인이 직접 갈아주는 핸드드립</li>
        <li>보드게임 : 우봉고!</li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
section {
  margin: 20px 0 20px 0;
}
</style>
