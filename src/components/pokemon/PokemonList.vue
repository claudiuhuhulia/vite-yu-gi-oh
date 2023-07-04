<script>
import { store } from '../data/store'
import PokemonCard from './PokemonCard.vue'

export default {
    components: { PokemonCard },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section id="pokemon ">

        <div class="row g-2 row-cols-5  ">
            <div class="col " v-for="pokemon in store.pokemons" :key="pokemon.id">
                <PokemonCard :name='pokemon.name' :image="pokemon.imageUrl" :number="pokemon.number"
                    :type="pokemon.type1" />
            </div>

        </div>



    </section>
</template>

<style></style>