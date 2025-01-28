<template>
    <NuxtLayout>
        <h1>{{ data[0] }}</h1>
    </NuxtLayout>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const key = route.params.result;

const { data } = await useFetch('https://fakestoreapi.com/products');

</script>

<style>
.error {
    color: red;
}
</style>
