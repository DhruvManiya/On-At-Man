<template>
  <div class="container">
    <div class="nevbar" v-if="displayNev">
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
  data() {
    return{

    }
  },
  computed:{
    displayNev() {
      return this.$store.state.displayNevbar    
    }
  }


}

</script>


<style>

:root{
    --border-color: #dddddd;
    --green-color:#52ff01;
    --font-color:#094456;
    --background-color: rgb(255, 255, 255);
    --highlited-li: #52ff01;
    --hovered-li: rgba(2,255,1,0.1);
    --box-shadow: #999;
  }
  
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background-color);
    color: var(--font-color);

  }

  *{
    margin: 0;
    padding: 0;
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
    background-color: var(--background-color);
    width: 15%;
    height: 98vh;  
    position: fixed;
    border-radius: 1rem;
    box-shadow: 0 0 0.7rem var(--box-shadow);
    transform: translate(0.5rem,0.5rem);
  }

  .main-container{
    position: absolute;
    width: 82%;
    height: auto;
    right: 0;
  }
</style>