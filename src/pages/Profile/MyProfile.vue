<template>
<div class="profile">

    <h1>My Profile</h1>
    <section>
      <div class="photo">
        <img src="../../images/default_profile.jpg" >
      </div>
        <div class="details">
          <div class="name">
            <div class="first-name">
              <label for="first-name"> First Name : </label>
              <input type="text" placeholder="First Name" size="5" value="Dhruv" disabled>
            </div>
            <div class="last-name">
              <label for="last-name"> Last Name : </label>
              <input type="text" placeholder="Last Name" size="5" value="Maniya" disabled>
            </div>
          </div>
          <div class="gender">
            <label for="gender"> Gender : </label>
            <input type="text" placeholder="gender" size="5" value="Male" disabled>
          </div>
          <div class="email">
            <label for="email"> E-mail : </label>
            <input type="email" placeholder="email" value="dhruvmaniya12@gmail.com" disabled>
          </div>
          <div class="phone-naumber">
            <label for="phone-naumber"> Phone Naumber : </label>
            <input type="text" placeholder="Phone Naumberr" size="15" value="39514 53254" disabled>
          </div>
          <div class="branch">
            <label for="branch"> Branch : </label>
            <input type="text" placeholder="Branch" size="15" value="Computer Engineering" disabled>
          </div>
          <div class="college">
            <label for="college"> College : </label>
            <input type="text" placeholder="College"  value="076 - SHRI SWAMI ATMANAND SARASWATI INSTITUTE OF TECHNOLOGY, SURAT" disabled>
          </div>
      </div>
    </section>
</div>
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

<style scoped>

.profile {
  width: 100%;
  height: auto;
  padding-bottom: 10vh;
  transform: translateX(-0.5rem);
  border-radius: 1rem;
  margin: 0.5rem 0;
  background-color: var(--section-background);

}

section{
  display: flex;
  justify-content:flex-start;
}

h1 {
  font-size: 4rem;
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  font-weight: 1;
  border-bottom: 1px solid var(--green-color);
}


input{
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid var(--green-color);
  background: transparent;

  
}
input:disabled{
  cursor: no-drop;
  -webkit-user-select: none; 
  -ms-user-select: none;
  user-select: none;
  color: var(--font-color);

}

label{
  margin: 0 1.5rem 0 3rem;
}

.photo{
  padding-left: 10%;
  margin: 3rem 0;
}

.details{
  padding-left: 5%;
  margin-top: 5rem;
}

img{
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  padding: 0.25rem;
  border: 0.1rem solid var(--green-color);

}


.name,
.gender,
.email,
.phone-naumber,
.branch,
.college{
  display: flex;
  margin-bottom: 3rem;
}

.college > input{
  width: 100%;

}


@media screen and (max-width: 1200px){
  .profile{
    margin-left: 0.95rem;
    width: 99%;
  }

  img{
  height: 10rem;
  width: 10rem;
  padding: 0.10rem;
  
}

.photo{
  padding-left: 5%;
  margin: 1.5rem 0;
}

}
/* 
@media screen and (max-width: 950px){
  .photo{
  padding-left: 2%;
  margin: 0.5rem 0;


}

  img{
  height: 7rem;
  width: 7rem;

}

.first-name{
  padding-bottom: 1rem;
}

} */

@media screen and (max-width: 750px){

.name,
.gender,
.email,
.phone-naumber,
.branch,
.college{
  margin-bottom: 1.5rem;
}


.name {
  display: flex;
  flex-direction: column;
}


.first-name{
  margin-bottom: 1rem;
}


}

@media screen and (max-width: 600px){


.name,
.gender,
.email,
.phone-naumber,
.branch,
.college{
  margin-bottom: 1.5rem;
}



section{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.details{
  margin-top: 2rem;
}

h1 {
  font-size: 2rem;
}


}

</style>