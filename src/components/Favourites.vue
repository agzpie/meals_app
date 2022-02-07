<template>
    <div class="card favourites">
        <div class="card-body">
            <h5 class="card-title">Your Favourites</h5>
            <p v-if="favourites.length == 0">
                You have no favourite meals :(
            </p>
        </div>
        <ul class="list-group list-group-flush">
            <li v-for="item in favourites" :key="item.idMeal" class="list-group-item d-flex justify-content-between align-items-center">
                Dish name: {{item.strMeal}}
                <span class="badge badge-primary badge-pill">X</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from "vuex";

export default {
    name: "Favourites",
    setup(){
        const store = useStore();
        let favourites = computed(function () {
            return store.state.favourites
        });
        return {
            favourites
        }
    }
}
</script>

<style scoped>
.favourites {
    min-height: 10vh;
    max-height: 50vh;
    background-color: antiquewhite;
    position: fixed;
    right: 1rem;
    z-index: 10;
}
</style>