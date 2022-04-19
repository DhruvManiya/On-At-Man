<template>
    <div class="sub-container">
        <h3>{{ subjectName }}</h3>
        <div class="description">
            <p> Subject Code : {{ subjectCode }} </p> <p>|</p> <p> Subject Name : {{ subjectName }} </p> <p>|</p> <p> <em> Enrollment Number : {{enrollmentnumberFrom}} to {{enrollmentnumberTo}} </em></p>
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
h3{
    padding: 0 1rem 0.25rem 1rem;
    border-bottom: 1px solid var(--green-color);
}

.description{
    display: flex;

}

p{
    padding: 0.5rem 1rem;
}

</style>