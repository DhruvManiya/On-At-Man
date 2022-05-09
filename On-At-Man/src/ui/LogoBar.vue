<template>
    <div class="display-responsive">
        <section>
            <div class="logo"><router-link to="/attendance"><img src="../images/ON_AT-Man_DarkMode-removebg-preview.png"></router-link></div>
        </section>
    </div>
</template>


<style scoped>


section{
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.5rem;
    z-index: 3;
    width: 100%;
    background-color: var(--section-background);
    border-radius: 0 0 0.5rem 0.5rem ;

}

img{
    height: 3.5rem;
    width: auto;
}

.display-responsive{
    display: none;
  }

@media screen and (max-width: 1250px) {
  .display-responsive{
    display: block;
  }
}

</style>