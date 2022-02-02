<template>
  <ul>
    <li class="element"><p>{{ tag.strCategory }}</p></li>
 </ul>
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
}
</style>