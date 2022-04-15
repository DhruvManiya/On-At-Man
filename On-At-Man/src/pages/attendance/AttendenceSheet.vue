<template>
    <section>
        <h1>My Subjects</h1>
        <ul class="all-subjects">
            <li class="subjects">
                <h3>Subject Name</h3>
                <div class="description">
                    <p> Subject Code : 333333 </p> <p>|</p> <p> Subject Name : subject </p> <p>|</p> <p> <em> Enrollment Number : 99999999990 to 99999999999 </em></p>
                </div>
            </li>
        </ul>
    </section>
</template>


<script>
export default {
  created() {
      if(this.$router.currentRoute._rawValue.name = "attendance") {
    this.$store.state.displayNevbar = true;
    }
  }

};

</script>

<style scoped>

section{
    width: 100%; 
    height: 100vh;
    box-shadow: 0 0 0.7rem var(--box-shadow);
    transform: translateX(-0.5rem);
    border-radius: 1rem;
}

h1{
    font-size: 8rem;
    padding: 2rem ;
    margin: 0.5rem 1rem 1rem 1rem;
    font-weight: 1;
    border-bottom: 1px solid var(--border-color);
}

li{
    list-style: none; 
    height: 3.25rem;   
    padding: 1rem ;
    margin: 2rem 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 0 0.4rem var(--box-shadow);
    display: flex;
    flex-direction: column;
}
h3{
    padding: 0 1rem;

}

.description{
    display: flex;

}

p{
    padding: 0.5rem 1rem;
}

</style>