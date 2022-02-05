<template>

    <div class="card">
        <h5 class="card-header">Category</h5>
        <div class="card-body">
            <TagElement 
            v-for="tag in tagsSection"
            :key="tag.strCategory"
            :tag="tag"
            />
        </div>
    </div>

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