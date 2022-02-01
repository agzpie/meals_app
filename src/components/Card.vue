<template>
  <div class="card" style="width: 18rem;">
      <div class="img">
        <img class="card-img-top" :src="thumbnail" alt="Card image cap">
        <a href="#" class="btn btn-outline-light like">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
        </a>
      </div>
    
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <!-- <p class="card-text">{{ description }}</p> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            id: null,
            name: "",
            description: "",
            thumbnail: null
        };
    },
    created() {
        //let state = "";
        // Simple GET request using axios
        axios.get(`https://themealdb.com/api/json/v1/1/random.php`)
        .then(response => {
            console.log(response.data);
            this.name = response.data.meals[0].strMeal;
            this.description = response.data.meals[0].strInstructions;
            this.thumbnail = response.data.meals[0].strMealThumb;
        })
        .catch( e => {
            console.log(e);
        });
    },

    

}
</script>

<style>
.img {
    position: relative;
}
.like {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
}

</style>