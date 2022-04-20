<template>
  <section class="main-section">
        <h1>Add Your New Subject Here</h1>
        <form action="submit">
          <div class="form-container">
            <div class="form-control">
              <label for="code">Subject Code</label>
              <input type="number" id="code">
            </div>
            <div class="form-control">
              <label for="name">Subject Name</label>
              <input type="text" id="name">
            </div>
            <div class="form-control enroll">
              <label for="numberFrom">enrollment number From</label>
              <input type="number" id="numberFrom">
              <label for="numberTo">to</label>
              <input type="number" id="numberTo">
            </div>
            <div class="submit-button">
            <the-button></the-button>
            </div>
          </div>
        </form>
  </section>
</template>


<script>
import TheButton from "../../ui/TheButton.vue";

export default {
  components: {
    TheButton
  },
  created() {
      if(this.$router.currentRoute._rawValue.name = "addSubject") {
    this.$store.state.displayNevbar = true;
    }
  },
  data() {
    return{
      code:null,
      name:'',
      numberFrom:null,
      numberTo:null
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
  font-size: 3rem;
  padding: 0.75rem;
  margin: 0.5rem 1rem 1rem 1rem;
  font-weight: 1;
  border-bottom: 1px solid var(--green-color);
}

input{
  padding-bottom: 0.25rem;
  border: none;
  border-bottom: 1px solid var(--green-color); 
}

.form-container{
  margin: 5rem;
}

form{
  display: flex;
  justify-content: center;
}


label{
  margin: 0 1.5rem 0 3rem;
  font-size: larger;
}

.form-control{
  padding-bottom: 2rem;
}

.submit-button{
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
</style>