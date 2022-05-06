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
        <router-link :to="'/attendance/'+subject.code+'/'+subject.name+'/'+subject.numberFrom+'/'+subject.numberTo" >
          <navigatin-button></navigatin-button>
        </router-link>
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
      return this.$store.getters['addSubject/mySubjects'];
    },
  },
  
};

</script>

<style scoped>
section {
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
  font-size: 8rem;
  padding: 2rem;
  margin: 0.5rem 1rem 1rem 1rem;
  font-weight: 1;
  border-bottom: 1px solid var(--green-color);
}

li {
  list-style: none;
  height: 3.25rem;
  padding: 1rem;
  margin: 2rem 1.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--li-background);
  box-shadow: 0 0 0.5rem var(--box-shadow);

}

@media screen and (max-width: 1400px){
  section{
    margin-left: 0.95rem;
    width: 99%;
  }
}
</style>