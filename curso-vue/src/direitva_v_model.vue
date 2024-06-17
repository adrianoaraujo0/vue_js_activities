<script setup>
import { ref } from 'vue';


    let nome = ref('');
    let mudar = ref(true);
    let sumir = ref(false);

</script>

<style>

.ok{
    background-color: green;
}

.ok2{
    background-color: red;
}

</style>


<template>
    <p v-if="nome.length < 5" :class="mudar ? 'ok' : 'ok2'"> Teste </p>

    <input v-model="nome" type="text">
    
    <p> {{ nome }}</p>

    <button @click="mudar = !mudar"> Click </button>
    
</template>
