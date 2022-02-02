<template>
<div class="side">
    <h3>Filter by</h3>
    <TagList  
        :tagsSection="this.categories"
    />
    
</div>
</template>

<script>
import TagList from './TagList.vue'
import Service from '../services/Service.js';

export default {
    components: {
        TagList
    },

    data() {
        return {
            //tags: []
            categories: Object
        }
    },

    created() {
        // Simple GET request using axios
        Service.getCategories()
            .then(response => {
                this.categories = response.data.meals;
                console.log(this.categories);
            })
            .catch( error => {
                console.log('There was an error: ' + error.response);
            })

    },

}
</script>

<style>
.side {
    max-width: 300px;
    background-color: antiquewhite;
}

</style>