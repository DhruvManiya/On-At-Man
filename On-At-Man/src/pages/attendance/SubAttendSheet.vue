<template>
  <section>
    <div class="header">
      <div class="responsive-container">
        <h1>{{ subName }}</h1><p class="display-responsive"> {{ subCode }} </p> <p></p>
      </div>
      <div class="header-number">
            <p class="display-normal"> Subject Code : {{ subCode }} </p> <p class="display-normal">|</p> <p> <em> <p class="display-en-normal">Enrollment Number :</p> {{numFrom}} to {{numTo}} </em></p>  
      </div>
    </div>
    <div class="taker" v-if="showSheetIf">
      <h2>Take Attandance Here</h2>
      <the-button name="Take your Sheet !!" @click="showSheet"></the-button>
    </div>
      <div v-else>
        <li>
          <h3><p class="display-li-en-normal">Enrollment </p> Number</h3>
          <div>
            <span>Absant</span>
            <span>Prasent</span>
          </div>
        </li>
        <li v-for="number in numbers" :key="number">
          <h3>{{ number }}</h3>
          <div class="mark-container">
            <span><div class="absent check-mark">+</div></span>
            <span><div class="present check-mark">✓</div></span>
            
          </div>
        </li>
        <div class="button">
          <the-button name="Submit" @click="submit"></the-button>
        </div>
      </div >
      
  </section>
</template>

<script>
import TheButton from '../../ui/TheButton.vue';

export default {
  components: { TheButton },
  
  created() {
      if(this.$router.currentRoute._rawValue.name = "sheet") {
    this.$store.state.displayNevbar = true;
    }
  },
  data () {
    return{
      subCode : this.$route.params.subCode,
      subName : this.$route.params.subName,
      numFrom : this.$route.params.numFrom,
      numTo : this.$route.params.numTo,
      showSheetIf:true,
      numbers:[],
      counterFrom : this.$route.params.numFrom,
      counterTo : this.$route.params.numTo,
    }
  },
  methods:{
    showSheet() {
      this.showSheetIf = false;
      for(let i=0;i<=this.numTo - this.numFrom;i++) {
        this.numbers[i] = this.counterFrom++;
      };
    },
    submit() {
      this.$router.replace('/attendance')
    }
  }
  

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

.header{
  padding: 2rem 2rem 1rem 2rem;
  margin: 0.5rem 1rem 1rem 1rem;
  border-bottom: 1px solid var(--green-color);
}
.responsive-container{
  display: flex;
  padding: 0 1rem 0.25rem 1rem;
}


h1 {
  font-size: 6rem;
  font-weight: 1;
}

.header-number{
  display: flex;
}

p{
  padding: 0.5rem 1rem;
}

.taker{
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

em{
    display: flex;
}

em > p{
    padding: 0;
}


li {
  list-style: none;
  height: 2.5rem;
  padding: 1rem;
  margin: 0 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--li-background);
  margin-bottom: 0.25rem;

}

h3{
  padding-left: 10rem;
}

span{
  padding-right: 5rem;
}



li:nth-child(even) {
  background-color: var(--li-even-background);
}

li:nth-child(odd) {
  background-color: var(--li-odd-background);

}
  li:nth-child(1) {
    margin-bottom: 0.75rem;
    background-color:  var(--li-first-background);
  }

.mark-container{
  width: 16rem;
  display: flex;
  flex-direction: row;
}

.check-mark{
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.absent{
  background-color: rgba(250, 4, 4 ,0.1);
  color: red;
  border: 1px solid red;
  /* transform: rotateY(90deg); */
}

.absent:hover{
  background-color: rgba(250, 4, 4 ,0.3);
}

.present{
  background-color: rgba(144, 247, 134, 0.1);
  color: rgb(43, 180, 43);
  border: 1px solid rgb(43, 180, 43);
  margin-left: 1rem;
}

.present:hover{
  background-color: rgba(144, 247, 134, 0.3);
}

.button{
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
}

.display-responsive{
padding-top: 4.5rem;
display: none;

}

.display-normal,
.display-en-normal{
    display: block;
}

@media screen and (max-width: 1250px){
  section{
    margin-left: 0.95rem;
    width: 99%;
  }
}

@media screen and (max-width: 775px){
  
.display-responsive{
display: block;

}

h3{
  padding-left: 5rem;
}

span{
  padding-right: 3rem;
}

.mark-container{
  justify-content: center;
  width: 13rem;
}


.display-normal{
  display: none;
}
}

@media screen and (max-width: 550px){
.display-en-normal{
  display: none;
}

.header{
  padding: 2rem 2rem 1rem 0.5rem;
  margin: 0.5rem 1rem 1rem 0rem;
}


h1 {
  font-size: 3.5rem;
}

.display-responsive{
padding-top: 2rem;

}


h3{
  padding-left: 2rem;
}

span{
  padding-right: 1.5rem;
}

.mark-container{
  width: 10rem;
}


}

@media screen and (max-width: 400px){
  
h3{
  padding-left: 0.5rem;
}

span{
  padding-right: 0.75rem;
}

.mark-container{
  width: 8rem;
}

li{
  padding: 0.5rem;
  height: 2rem;
}

.display-li-en-normal{
  display: none;
}

.check-mark{
  height: 1.5rem;
  width: 1.5rem;
}
}

</style>