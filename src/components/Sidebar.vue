<!-- TODO: mapGetters -->
<template>
<div class="side">
    <h3 class="filter">Filter by</h3>
    <TagList 
    />
    
</div>
</template>

<script>
import TagList from './TagList.vue'

export default {
    components: {
        TagList
    },
}
</script>

<style>
.side {
    max-width: 300px;
    background-color: antiquewhite;
}
.filter {
    margin: 0.5rem;
}

</style>