<!-- TODO: mapGetters -->
<template>
<div class="side">
    <h3>Filter by</h3>
    <TagList 
        :tagsSection="categories"
    >Category</TagList>
    <TagList  
        :tagsSection="areas"
    >Area</TagList>
    
</div>
</template>

<script>
//import { mapState } from 'vuex'
import TagList from './TagList.vue'

export default {
    components: {
        TagList
    },

    computed: {
        categories() {
            return this.$store.state.categories
        },
        areas() {
            console.log(this.$store.state)
            return this.$store.getters.allAreas
        }
    },
    mounted() {
        this.$store.dispatch("getCategories");
        this.$store.dispatch("getAreas");
    }

    /*data() {
        return {
            tags: [],
            categories: Object
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

    },*/
}
</script>

<style>
.side {
    max-width: 300px;
    background-color: antiquewhite;
}

</style>