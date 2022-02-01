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
import axios from 'axios';
import Card from './Card.vue';

export default {
    name: 'CardDisplay',
    components: {
        Card,
    },

    data() {
        return {
            meals: []
        }
    },

    created() {
        // Simple GET request using axios
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Soup`)
            .then(response => {
                console.log(response.data);
                this.meals = response.data.meals;
            })
            .catch( error => {
                console.log('There was an error: ' + error.response);
            })
    },
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); /* needs testing */
    grid-gap: .5rem;
    }
</style>