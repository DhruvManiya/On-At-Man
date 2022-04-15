<template>
    <p>Attendence</p>
</template>


<script>
export default {
  created() {
      if(this.$router.currentRoute._rawValue.name = "attendance") {
    this.$store.state.displayNevbar = true;
    }
  }

};
</script>