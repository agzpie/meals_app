<template>
    <h5>Category</h5>
    <TagElement 
        v-for="tag in tagsSection"
        :key="tag.strCategory"
        :tag="tag"
    />
</template>

<script>
import TagElement from './TagElement.vue'

export default {
    components: {
        TagElement
    },

    props: ['tagsSection']

}
</script>

<style>

</style>