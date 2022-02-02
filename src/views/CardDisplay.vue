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
import Service from '../services/Service.js';
import Card from '../components/Card.vue';

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
        Service.getEvents()
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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>