<template>
    <section>
        <div class="sign-btn">
            <div class="signup-btn"><p>sign Up</p></div>
            <div class="signin-btn"><p>sign In</p></div>
        </div>
        <div class="sign-container">
            <div>
                <SignUp></SignUp>
            </div>
            <div>        
                <SignIn></SignIn>
            </div>
        </div>
    </section>
</template>

<script>
import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";

export default {
    created() {
        if (this.$router.currentRoute._rawValue.name = "SignInUp") {
            this.$store.state.displayNevbar = false;
        }
    },
    components: { SignIn, SignUp }
}



</script>

<style scoped>

section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    padding-bottom: 5vh;
    background-color:black;
    width: 25%;
    margin: auto;
    color: var(--green-color);
    border-radius: 1rem;
    box-shadow: 0 0 2rem var(--box-shadow);
    margin-top: 15vh;
}

.sign-btn{
    display: flex;
    justify-content: center;
    margin: 8vh 0 3vh 0;
}

.signup-btn,
.signin-btn{
    margin: 0 2.5vh;
    padding: 1rem 2rem;
    border-radius: 2rem;
    cursor: pointer;
    border-radius: 2rem;
    background-color: #333;
    color: var(--green-color);

}

.sign-container{
    height: 40vh;
    width: 80%;
    overflow: hidden;
    display: flex;

}

.sign-container > div {
    padding: 0 30% 0 28%;
}

</style>