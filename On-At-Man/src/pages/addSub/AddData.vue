<template>
    <form @submit.prevent="submitFrom">
          <div class="form-container">
            <div class="form-control">
              <label for="code">Subject Code</label>
              <input type="number" id="code" v-model="code">
            </div>
            <div class="form-control">
              <label for="name">Subject Name</label>
              <input type="text" id="name" v-model="name">
            </div>
            <div class="form-control enroll">
              <label for="numberFrom">enrollment number From</label>
              <input type="number" id="numberFrom" v-model="numberFrom">
              <label for="numberTo">to</label>
              <input type="number" id="numberTo" v-model="numberTo">
            </div>
            <div class="submit-button">
            <the-button></the-button>
            </div>
          </div>
        </form>
</template>

<script>
import TheButton from "../../ui/TheButton.vue";

export default{

    emit:['save-data'],
    components: {
    TheButton,
    
    },
    data() {
    return{
      code:null,
      name:'',
      numberFrom:null,
      numberTo:null
    }
  },
  methods:{
    submitFrom() {
            const formData = {
                code:this.code,
                name:this.name,
                numberFrom:this.numberFrom,
                numberTo:this.numberTo,
            };
            this.$emit('save-data',formData);
        
        
    }
    
  }

}
</script>


<style scoped>

input{
  padding-bottom: 0.25rem;
  border: none;
  border-bottom: 1px solid var(--green-color); 
  background-color: transparent;
  color: var(--font-color);
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