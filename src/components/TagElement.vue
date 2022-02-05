<template>


<a href="#" class="btn btn-outline-secondary element">
    {{ tag.strCategory }}
</a>
 
</template>

<script>
export default {
    props: {
        tag: Object
    },
}
</script>

<style>
.element {
    font-size: 0.8rem;
    padding: 0.4rem;
    margin: 0.2rem;
    border-radius: 0;
}
</style>