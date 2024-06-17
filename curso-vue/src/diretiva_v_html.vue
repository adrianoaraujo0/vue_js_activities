<script setup>

    let texto = '<p> Testando o v-html</p>';
</script>

<template>

    <p>TESTE</p>

    <p> {{ texto }}</p>

    <div v-html="texto"></div>
</template>