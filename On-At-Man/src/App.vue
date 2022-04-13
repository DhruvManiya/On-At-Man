<template>
  <div class="container">
  <the-navebar></the-navebar>

  <router-view></router-view>
  </div>
    
</template>


<script>
import TheNavebar from './ui/TheNavebar.vue'

export default {
  components: { TheNavebar },
  
}
</script>


<style>

:root{
    --green-color:#52ff01;
  }
  
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  a{
    text-decoration: none;
  }

  .container{
    display: flex;
  }
  

</style>