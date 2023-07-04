<script>
export default {
    props: {
        name: String,
        image: String,
        number: Number,
        type: String
    },

}
</script>

<template>
    <div class="pokemon-card mt-3">
        <div class="pok-img my-3">
            <img :src="image" :alt="name">
        </div>
        <p>{{ number }}</p>
        <h3>{{ name }}</h3>
        <div class="type">{{ type }}</div>
    </div>
</template>

<style lang="scss" scoped>
.pok-img {
    border-radius: 50%;
    height: 150px;
    width: 150px;

    img {
        height: 100%;
        border-radius: 50%;
        width: 100%;
        object-fit: cover;
    }
}

.pokemon-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
        margin: 0;
    }

    background-color: gray;
    border-radius: 20px;

    .type {
        font-style: italic;
    }

    h3 {
        font-size: 1.5rem;
    }
}
</style>