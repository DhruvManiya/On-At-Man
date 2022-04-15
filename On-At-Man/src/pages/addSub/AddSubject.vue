<template>
    <p>Add Subject Herr </p>
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