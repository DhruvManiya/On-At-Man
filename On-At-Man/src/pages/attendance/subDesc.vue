<template>
    <div class="sub-container">
        <div class="responsive-container">
            <h3>{{ subjectName }} </h3><p class="display-responsive">{{ subjectCode }} </p> 
        </div>
        <div class="description">
            <p class="display-normal"> Subject Code : {{ subjectCode }} </p> <p class="display-normal">|</p> <p class="display-en-normal"> Subject Name : {{ subjectName }} </p> <p class="display-normal">|</p> <p> <em> <p class="display-normal">Enrollment Number :</p> {{enrollmentnumberFrom}} to {{enrollmentnumberTo}} </em></p>
        </div>
    </div>
</template>

<script>
export default {
    props:['subjectCode','subjectName','enrollmentnumberFrom','enrollmentnumberTo'],
}
</script>

<style scoped>
.sub-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.responsive-container{
    padding: 0 1rem 0.25rem 1rem;
    border-bottom: 1px solid var(--green-color);
}

.description{
    display: flex;

}

p{
    padding: 0.5rem 1rem;
}

em{
    display: flex;
}

em > p{
    padding: 0;
}

.display-normal,
.display-en-normal{
    display: block;
}

.display-responsive{
    display: none;
}

@media screen and (max-width: 1200px){

.display-normal{
    display: none;
}

.display-responsive{
    display: block;
}

.responsive-container{
    display: flex;

}
}

@media screen and (max-width: 750px){
    .display-en-normal{
    display: none;
}
}

</style>