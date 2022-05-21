<template>
    <form @submit.prevent="submitFrom">
          <div class="form-container">
            <p class="error" v-if="subCode">Enter Subject Code</p>
            <div class="form-control">
              <label for="code" class="display-sub-normal">Subject Code *</label>
              <input type="number" id="code" placeholder="Subject Code *" v-model="code">
            </div>
            <p class="error" v-if="subName">Enter Subject Name</p>
            <div class="form-control">
              <label for="name" class="display-sub-normal">Subject Name *</label>
              <input type="text" id="name" placeholder="Subject Name*" v-model="name">
            </div>
            <p class="error" v-if="stuNumFrom">Enter Your Starting Number</p>
            <p class="error" v-if="stuNumTo">Enter Your Ending Number</p>
            <p class="error" v-if="numberCompare">Your Ending Number Should be Gretterthan your Starting Number</p>
            <div class="form-control enroll">
              <label for="numberFrom" class="display-responsive display-mo-responsive">Number* </label>
              <label for="numberFrom" class="display-normal ">Enrollment Number From *</label>
              <input type="number" id="numberFrom" placeholder="Enrollment Number From*" v-model="numberFrom">
              <label for="numberTo" class="display-mo-responsive">To </label>
              <input type="number" id="numberTo" placeholder="Enrollment Number To*" v-model="numberTo">
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
      code:null,
      name:'',
      numberFrom:null,
      numberTo:null,
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
}

</style>