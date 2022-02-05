<template>
<div class="container-fluid">
  <Navbar />
  <!--<Card />-->
  <div class="content">
    <Sidebar />
    <CardDisplay />
    

  </div>

</div>  
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue';
//import Card from './components/Card.vue'
import CardDisplay from './views/CardDisplay.vue'
//import Card from './components/Card.vue'
//import axios from 'axios';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    CardDisplay
    //Card
  },

  
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
