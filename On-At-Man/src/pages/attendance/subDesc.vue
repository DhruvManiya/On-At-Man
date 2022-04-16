<template>
    <div class="sub-container">
        <h3>Subject Name</h3>
        <div class="description">
            <p> Subject Code : 333333 </p> <p>|</p> <p> Subject Name : subject </p> <p>|</p> <p> <em> Enrollment Number : 99999999990 to 99999999999 </em></p>
        </div>
    </div>
</template>

<script>
export default {
    
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
    border-bottom: 1px solid var(--border-color);
}

.description{
    display: flex;

}

p{
    padding: 0.5rem 1rem;
}

</style>