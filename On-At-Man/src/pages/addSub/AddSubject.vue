<template>
  <section class="main-section">
        <h1>Add Your New Subject Here</h1>
  </section>
</template>


<script>
export default {
  created() {
      if(this.$router.currentRoute._rawValue.name = "addSubject") {
    this.$store.state.displayNevbar = true;
    }
  }

};
</script>

<style scoped>
.main-section{
  width: 100%;
  height: auto;
  padding-bottom: 10vh;
  box-shadow: 0 0 0.7rem var(--box-shadow);
  transform: translateX(-0.5rem);
  border-radius: 1rem;
  margin: 0.5rem 0;

}
h1 {
  font-size: 4rem;
  padding: 0.75rem;
  margin: 0.5rem 1rem 1rem 1rem;
  font-weight: 1;
  border-bottom: 1px solid var(--green-color);
}
</style>