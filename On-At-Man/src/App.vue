<template>
  <div class="container">
    <div class="nevbar">
      <the-navebar></the-navebar>
    </div>

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
  .nevbar{
    background-color: #999;
    width: 15%;
    height: 100vh;  
  }

</style>