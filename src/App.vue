<script>
import { store } from './components/data/store'
import axios from 'axios'
import SelectForm from './components/pokemon/SelectForm.vue'
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
const endpointTypes = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1'
import AppMain from './components/AppMain.vue'
export default {
  components: { AppMain, SelectForm },
  data() {
    return {
      pokemons: [],
      types1: []
    }
  },
  created() {
    axios.get(endpoint).then(res => {
      store.pokemons = res.data.docs
    }),
      axios.get(endpointTypes).then(res => {
        store.types1 = res.data
        console.log(res.data)
      })
  }
} 
</script>

<template>
  <header>
    <h1 class="text-center fw-bold mt-5">Pokedex</h1>
  </header>

  <main>
    <div class="pokebox  mt-3 container">
      <div class="boxheader d-flex justify-content-between">
        <div class="leds d-flex">
          <div class="blue-circle mx-1"></div>
          <div class="red-circle mx-1"></div>
          <div class="yellow-circle mx-1"></div>
          <div class="green-circle mx-1"></div>
        </div>
        <SelectForm :types1="types1" />
      </div>



      <div class="main-screen p-1 mt-4">

        <AppMain :pokemons="pokemons" />

      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;

.main-screen {
  overflow-y: scroll;
}
</style>