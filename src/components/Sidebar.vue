<!-- TODO: map categories to a new object -->
<template>
<div class="side">
    <h3>Filter by</h3>
    <TagList  
        :tagsSection="categories"
    />
    
</div>
</template>

<script>
import TagList from './TagList.vue'
import Service from '../services/Service.js';
import { reactive } from '@vue/reactivity';

const categories = reactive({
    data: [],
});

export default {
    components: {
        TagList
    },

    data() {
        return {
            tags: [],
            //categories: Object
        }
    },

    created() {
        // Simple GET request using axios
        Service.getCategories()
            .then(response => {
                categories.data = response.data.meals;
                console.log(categories.data);
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