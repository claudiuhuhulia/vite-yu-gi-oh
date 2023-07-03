<script>
import axios from 'axios'
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
export default {
    data() {
        return {
            pokemons: []
        }
    },
    created() {
        axios.get(endpoint).then(res => {
            this.pokemons = res.data.docs
        })
    }
}
</script>

<template>
    <section id="pokemon">

        <div class="row g-2 row-cols-2 row-cols-md-3 row-cols-lg-4">
            <div class="col">

            </div>
        </div>



        <div v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.name }}</div>
    </section>
</template>

<style></style>