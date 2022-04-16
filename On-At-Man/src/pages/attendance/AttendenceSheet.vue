<template>
  <section>
    <h1>My Subjects</h1>
    <ul class="all-subjects">
      <li v-for="subject in subjects" :key="subject.code">
        <sub-desc
          :subjectCode="subject.code"
          :subjectName="subject.name"
          :enrollmentnumberFrom="subject.numberFrom"
          :enrollmentnumberTo="subject.numberTo"
        ></sub-desc>
        <navigatin-button></navigatin-button>
      </li>
    </ul>
  </section>
</template>


<script>
import NavigatinButton from "../../ui/NavigatinButton.vue";
import subDesc from "./subDesc.vue";

export default {
  components: {
    subDesc,
    NavigatinButton,
  },
  created() {
    if ((this.$router.currentRoute._rawValue.name = "attendance")) {
      this.$store.state.displayNevbar = true;
    }
  },
  computed: {
    subjects() {
      return this.$store.getters['mainSheetOfAttendenc/mySubjects'];
    },
  },
  
};

</script>

<style scoped>
section {
  width: 100%;
  height: 100vh;
  box-shadow: 0 0 0.7rem var(--box-shadow);
  transform: translateX(-0.5rem);
  border-radius: 1rem;
}

h1 {
  font-size: 8rem;
  padding: 2rem;
  margin: 0.5rem 1rem 1rem 1rem;
  font-weight: 1;
  border-bottom: 1px solid var(--border-color);
}

li {
  list-style: none;
  height: 3.25rem;
  padding: 1rem;
  margin: 2rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.4rem var(--box-shadow);
  display: flex;
  justify-content: space-between;
}
</style>