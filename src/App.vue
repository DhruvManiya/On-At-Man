<template>
  <div class="container">
    <logo-bar></logo-bar>
    <div class="nevbar" v-if="displayNev">
      <the-navebar></the-navebar>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
    <responsive-nevbar></responsive-nevbar>
  </div>
    
</template>


<script>
import TheNavebar from './ui/TheNavebar.vue'
import LogoBar from './ui/LogoBar.vue'
import ResponsiveNevbar from './ui/ResponsiveNevbar.vue'

export default {
  components: { TheNavebar, LogoBar, ResponsiveNevbar },
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

html{
    --border-color: #dddddd;
    --green-color:#52ff01;
    --font-color:#dddcdc;
    --background-color: #181818;
    --highlited-li: #52ff01;
    --hovered-li: rgba(2,255,1,0.1);
    --section-background: #212121;
    --li-background:#303030;
    --li-first-background:#272727;
    --li-even-background:#303030;
    --li-odd-background:#404040;
    --box-shadow: rgba(0,0,0,0.3);
    --background-res-color: #191919;
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
    -webkit-user-select: none; 
    -ms-user-select: none;
    user-select: none;
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
    height: 96vh;  
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

  ::-webkit-scrollbar{
    width: 0.9rem;
  }

  ::-webkit-scrollbar-track{
    background: transparent;
    border-radius: 1rem;
    margin-block: 1em;
  }

  ::-webkit-scrollbar-thumb{
    background: rgb(126, 126, 126);
    border-radius: 1.25rem;
    border: 0.2rem solid rgb(210, 211, 210);
    
  }
  ::-webkit-scrollbar-thumb:hover{
    background: rgb(2,255,1);

  }
  ::-webkit-scrollbar-track:hover{
    background: rgba(2,255,1,0.3);

  }

  @media screen and (max-width: 1250px) {
  
  .nevbar{
    display: none;
  }

  .main-container{
    width: 100%;

  }

  .main-container{
    margin-top: 3.25rem;
  }

  }
  @media screen and (max-width: 600px){
    body{
      font-size: 0.8rem;
    }
  }

</style>