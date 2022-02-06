<template>
    <div class="card">
        <h5 class="card-header">Category</h5>
        <div class="card-body">
            <a href="#" class="btn btn-outline-secondary element"
                v-for="id in categories"
                :key="id">
                {{ id.strCategory }}
            </a>
        </div>
    </div>

    <div class="card">
        <h5 class="card-header">Area</h5>
        <div class="card-body">
            <a href="#" class="btn btn-outline-secondary element"
                v-for="id in areas"
                :key="id">
                {{ id.strArea }}
            </a>
        </div>
    </div>

    <div class="card">
        <h5 class="card-header">Area</h5>
        <div class="card-body">
            <a href="#" class="btn btn-outline-secondary element"
                v-for="id in ingredients"
                :key="id">
                {{ id.strIngredient }}
            </a>
        </div>
    </div>
</template>

<script>import { mapState } from "vuex";


export default {
    computed: {
        ...mapState(["categories"]),
        ...mapState(["areas"]),
        ...mapState(["ingredients"]),

    },
    mounted() {
        this.$store.dispatch("getCategories");
        this.$store.dispatch("getAreas");
        this.$store.dispatch("getIngredients");
    }
}
</script>

<style>
.element {
    font-size: 0.8rem;
    padding: 0.4rem;
    margin: 0.2rem;
    border-radius: 0;
}
</style>