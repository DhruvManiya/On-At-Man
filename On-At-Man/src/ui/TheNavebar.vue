<template>
    <section>
        <router-link to="/attendance"><div class="logo"></div></router-link>
        <ul>
            <li><router-link to="/profile"> Profile </router-link></li>
            <li><router-link to="/attendance"> Attendence </router-link></li>
            <li><router-link to="/addSubject"> Add Subject </router-link></li>
        </ul>
    </section>
</template>

<style scoped>

.logo{
    background-image: url(../images/ON_AT-Man-removebg-preview.png);
    height: 100px;
    width: 100px;
}

</style>