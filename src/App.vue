<template>
<div class="container-fluid">
  <Navbar />
  <div class="content">
    <Sidebar />
    <CardDisplay />
    <Favourites />
  </div>
</div>  
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import CardDisplay from './views/CardDisplay.vue';
import Favourites from './components/Favourites.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    CardDisplay,
    Favourites
  },

  setup() {
    const store = useStore();

    let favourites = computed(function () {
      return store.state.favourites
    });

    return {
      favourites,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  display: flex;
  flex-direction: row;
}
</style>
