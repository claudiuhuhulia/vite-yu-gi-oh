<script>
import { store } from '../data/store'
export default {
    data() {
        return store
    },

} 
</script>

<template>
    <select class="form-select w-25 h-25" aria-label="Default select example">
        <option v-for="opt in types1" :value="opt">{{ opt }}</option>


    </select>
</template>


