<template>
    <div class="display-responsive">
        <section>
            <router-link to="/profile"><li> Profile </li></router-link>
            <router-link to="/attendance"><li> Attendence </li></router-link>
            <router-link to="/addSubject"><li> Add Subject </li></router-link>      
        </section>
    </div>
</template>


<style scoped>
section{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content:space-around;
    align-items: center;
    height: 3.5rem;
    z-index: 3;
    width: 100%;
    background-color: var(--background-res-color);
    border-radius:  0.5rem 0.5rem 0 0 ;

}


li{
    color: var(--font-color);
    list-style: none; 
    height: 1rem;
    width: 100%;   
    padding: 0.8rem 0 0.8rem 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem var(--box-shadow);
    

}


li:focus ,
li:active  {
    background-color: var(--li-background);
}

a.router-link-exact-active > li {
    background-color: var(--li-background);
    color: var(--green-color);
}

.display-responsive{
    display: none;
    width: 100%;

  }

@media screen and (max-width: 1250px) {
  .display-responsive{
    display: block;
  }
}
</style>