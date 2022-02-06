<template>
    <div class="container">
        <div class="card-deck">
             <Card 
                v-for="meal in meals"
                :key="meal.idMeal"
                :meal="meal"
            />
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    name: 'CardDisplay',
    components: {
        Card,
    },
    
    computed: {
        gettermeals() {
            return this.$store.getters.allMeals
        },
        meals() {
            return this.$store.state.meals
        }
    },
    mounted() {
        this.$store.dispatch("getMeals");
    }
}
</script>

<style scoped>
.container {
    margin-top: 2rem;
}
    .header {
        font-weight: 700;
        font-size: 1.5rem;
    }
    .snippet {
        color: grey;
        margin-bottom: 1.5rem;
    }
    .card-deck {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>