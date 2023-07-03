<script>
import AppMain from './components/AppMain.vue'
export default {
  components: { AppMain }
} 
</script>

<template>
  <header>
    <h1 class="text-center fw-bold mt-5">Pokedex</h1>
  </header>

  <main>
    <div class="pokebox  mt-3 container">
      <div class="boxheader d-flex">
        <div class="blue-circle mx-1"></div>
        <div class="red-circle mx-1"></div>
        <div class="yellow-circle mx-1"></div>
        <div class="green-circle mx-1"></div>
      </div>

      <div class="main-screen p-1 mt-4">

        <AppMain />

      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>