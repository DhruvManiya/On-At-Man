<template>
    <section>
        <div class="logo"><router-link to="/attendance"><img src="../images/ON_AT-Man_DarkMode-removebg-preview.png"></router-link></div>
        <ul>
            <router-link to="/profile"><li> Profile </li></router-link>
            <router-link to="/attendance"><li> Attendence </li></router-link>
            <router-link to="/addSubject"><li> Add Subject </li></router-link>
        </ul>
    </section>
</template>

<style scoped>

li:focus ,
li:active  {
    background-color: var(--highlited-li);
}
/* 
.highlight{
    background-color: var(--highlited-li);

} */

section{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--section-background);
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem var(--box-shadow);

}

li{
    background-color: var(--li-background);
    list-style: none; 
    height: 2.15rem;   
    padding: 1.2rem 10% 0.5rem 10%;
    margin: 0 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem var(--box-shadow);

}

ul{
    height: 80vh;
    display: flex;
    flex-direction: column ;
    padding: 0;
    align-content: center;
    gap: 0.5rem;
}

.logo{
    height: 10rem;
    width: 10rem;
    margin: 0 auto;
}

img{
    height: 10rem;
    width: 10rem;
}

div > p{
    padding: 0 2rem;
    color: var(--font-color);
    font-size: 1.1rem;
}

a{
    color: var(--font-color);
    font-size: 1.1rem;
}

a.router-link-exact-active > li {
    background-color: var(--highlited-li);
}
li:hover{
    background-color: var(--hovered-li);
}

</style>