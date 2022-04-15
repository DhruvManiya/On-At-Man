<template>
    <p>My Profile</p>
</template>

<script>
export default {
  created() {
      if(this.$router.currentRoute._rawValue.name = "profile") {
    this.$store.state.displayNevbar = true;
    }
  }

};
</script>