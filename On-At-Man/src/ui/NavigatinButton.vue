<template>
    <button> →
</button>
</template>

<style scoped>
/* From uiverse.io by @Cuzart */
button {
 position: relative;
 display: block;
 padding: 0.5rem 1rem 1rem 1.5rem;
 font-size: 48px;
 color: #52ff01;
 letter-spacing: 0.2em;
 text-align: center;
 text-transform: uppercase;
 background-color: transparent;
 border: 1px solid #52ff01;
 border-bottom: 5px solid #52ff01;
 transition: color 700ms ease;
 transition-property: color, background-color, transform;
 cursor: pointer;
 z-index: 1;
 
}

button:hover {
 color: white;
 box-shadow: 0 0 0.5em #52ff01;
}

button:hover:before {
 width: 100%;
 height: 100%;
 top: auto;
 bottom: 0;
}

button:active {
 transform: translateY(4px)
}

button:before {
 content: '';
 position: absolute;
 display: block;
 margin: 0 auto;
 height: 0%;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: -1;
 background-color: #52ff01;
 transition: height 0.3s ease;
}

</style>