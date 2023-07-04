<script>
import { store } from '../data/store'

export default {
    data() {
        return { selected: '' }, store

    },
    emits: ['type-change'],


} 
</script>

<template>
    <select class="form-select w-25 h-25" aria-label="Default select example" v-model="selected"
        @change="$emit('type-change', selected)">
        <option selected value="">Scegli il tipo da cercare</option>
        <option v-for="opt in types1" :key="opt" :value="opt">{{ opt }}</option>
    </select>
</template>


