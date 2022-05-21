<template>
    <form @submit.prevent="submitFrom">
          <div class="form-container">
            <p class="error" v-if="subCode">Enter Faculty ID</p>
            <div class="form-control">

              <input type="number" id="code" placeholder="Faculty ID*" v-model="id">
            </div>
            <p class="error" v-if="subName">Enter Faculty Name</p>
            <div class="form-control">

              <input type="text" id="name" placeholder="Faculty Name*" v-model="name">
            </div>
            <p class="error" v-if="stuNumFrom">Branch</p>
            <div class="form-control enroll">

              <input type="text" id="numberFrom" placeholder="Branch*" v-model="branch">

              <input type="text" id="numberTo" placeholder="Enrollment Number To*" v-model="numberTo">
            </div>
            <div class="submit-button">
            <the-button name="Sign Up"></the-button>
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
      id:null,
      name:'',
      branch:'',
      numberTo:'',
      subName:false,
      subCode:false,
      stuNumFrom:false,
      stuNumTo:false,
      numberCompare:false
    }
  },
  methods:{
    submitFrom() {
      if(this.code === null) { 
        this.subCode = true
      }
      else if (this.name === '') {
        this.subName = true
      }
      else if (this.numberFrom === null) {
        this.stuNumFrom = true
      }
      else if (this.numberTo === null) {
        this.stuNumTo = true
      }
      else if (this.numberFrom >= this.numberTo ) {
        this.numberCompare = true
      }
      else{
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

}
</script>

<style scoped>

form{
    height: 50vh;
    width: 100%;
    padding: 5vh 0;
}

p{
    color: red;
}

input{
  padding-bottom: 0.25rem;
  border: none;
  border-bottom: 1px solid var(--green-color); 
  background-color: transparent;
  color: var(--font-color);
  margin-bottom: 2rem;
  
}

input::placeholder {
  font-size: 1rem;
}

</style>
