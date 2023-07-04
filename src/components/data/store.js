import { reactive } from 'vue'

export const store = reactive({
    pokemons:[],
    types1:[],
    pages:{prev:null, next:null}
})