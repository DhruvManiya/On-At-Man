<template>
    <section>
        <router-link to="/attendance"><div class="logo"></div></router-link>
        <ul>
            <li><router-link to="/profile"> Profile </router-link></li>
            <li><router-link to="/attendance"> Attendence </router-link></li>
            <li><router-link to="/addSubject"> Add Subject </router-link></li>
        </ul>
        <div>
           <p> dark mode </p>
        </div>
    </section>
</template>

<style scoped>

section{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

li{
    list-style: none; 
    height: 2rem;   
}

ul{
    height: 80vh;
    display: flex;
    flex-direction: column ;
}

.logo{
    background-image: url(../images/ON_AT-Man-removebg-preview.png);
    height: 100px;
    width: 100px;
}

div > p{
    padding-left: 2rem;
}
</style>