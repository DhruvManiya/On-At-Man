<template>
  <section class="main-section">
        <h1>Add Your New Subject Here</h1>
        <add-data @save-data="saveData" ></add-data>
  </section>
</template>


<script>
import AddData from './AddData.vue';

export default {
  components:{
    AddData
  } ,

  created() {
      if(this.$router.currentRoute._rawValue.name = "addSubject") {
    this.$store.state.displayNevbar = true;
    }
  },
  methods:{
    saveData(data){
      this.$store.dispatch('addSubject/registerSubject',data);
      this.$router.replace('/attendance')
    }
  }

};
</script>

<style scoped>
.main-section{
  width: 100%;
  height: auto;
  padding-bottom: 10vh;
  transform: translateX(-0.5rem);
  border-radius: 1rem;
  margin: 0.5rem 0;
  background-color: var(--section-background);
  box-shadow: 0 0 0.5rem var(--box-shadow);

}
h1 {
  font-size: 3rem;
  padding: 0.75rem;
  margin: 0.5rem 1rem 1rem 1rem;
  font-weight: 1;
  border-bottom: 1px solid var(--green-color);
}

</style>