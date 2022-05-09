<template>
    <div>
    <input type="checkbox" class="checkbox" id="checkbox" @click="toggle">
  <label for="checkbox" class="label">
    <i class="fas fa-moon"></i>
    <i class='fas fa-sun'></i>
    <div class='ball'></div>
  </label>
</div>
</template>

<script>

    export default {
        data() {
            return{
                toggleButton:false
            }
        },
        methods:{
            toggle() {
               this.toggleButton =! this.toggleButton; 
            }
        }
    }
</script>

<style scoped>
    * {
  box-sizing: border-box;
}
/* body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  transition: background 0.2s linear;
} */

.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  width: 30px;
  height: 15px;
  background-color: var(--font-color);
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  transition: background-color 0.2s linear;
}

.ball {
  width: 10px;
  height: 10px;
  background-color: var(--green-color);
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the elemenent after the label*/
.checkbox:checked + .label .ball{
  transform: translateX(15px);
}
.checkbox:checked + .label {
background-color: white;
border: 1px solid rgb(133, 131, 131);
}


.fa-moon {
  color: pink;
}

.fa-sun {
  color: yellow;
}
</style>