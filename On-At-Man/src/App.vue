<template>
  <div class="container">
    <div class="nevbar">
      <the-navebar></the-navebar>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
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
    --font-color:#E99557;
    --main-background: #F4E6C1;
    --nav-background: #094456;
    --highlited-li: rgba(244, 230, 193,0.3);
  }
  
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--main-background);
    color: var(--font-color);
    text-shadow: 0 0 0.15rem #c4a85b ;

  }

  a{
    text-decoration: none;
  }

  .container{
    display: flex;
    gap: 2em;
    position: relative;
  }
  .nevbar{
    background-color: var(--nav-background);
    width: 15%;
    height: 100vh;  
    position: fixed;
  }

  .main-container{
    position: absolute;
    width: 82%;
    height: auto;
    right: 0;
  }
</style>