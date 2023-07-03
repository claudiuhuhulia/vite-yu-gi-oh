<script>
import axios from 'axios'
import PokemonCard from './PokemonCard.vue'

const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
export default {
    components: { PokemonCard },
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
    <section id="pokemon ">

        <div class="row g-2 row-cols-2 row-cols-md-3 row-cols-lg-4 ">
            <div class="col " v-for="pokemon in pokemons" :key="pokemon.id">
                <PokemonCard :name='pokemon.name' :image="pokemon.imageUrl" :number="pokemon.number"
                    :type="pokemon.type1" />
            </div>

        </div>



    </section>
</template>

<style></style>