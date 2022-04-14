<template>
    <section>
        <router-link to="/attendance"><div class="logo"></div></router-link>
        <ul>
            <li><router-link to="/profile"><p> Profile </p></router-link></li>
            <li><router-link to="/attendance"><p> Attendence </p></router-link></li>
            <li><router-link to="/addSubject"><p> Add Subject </p></router-link></li>
        </ul>
        <div>
           <p> dark mode </p>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

li:focus ,
li:active  {
    background-color: var(--highlited-li);
}

section{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

li{
    list-style: none; 
    height: 2.15rem;   
    padding: 0.5rem 10%;
    margin: 0 1rem;
    border-radius: 1rem;
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
    background-image: url(../images/ON-AT-Man.png);
    height: 100px;
    width: 100px;
}

div > p{
    padding-left: 2rem;
    
}

p{
    color: var(--font-color);
    margin: 0.5rem auto;
    font-size: 1.25rem;
}
</style>