<template>
    <NuxtLayout>
        <h1>{{ data[0] }}</h1>
    </NuxtLayout>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const key = route.params.key;

const { data, error, refresh } = useFetch('https://fakestoreapi.com/products');

useHead({
    link: [
        { rel: 'stylesheet', href: '/style.css' }
    ]
});
</script>

<style>
.error {
    color: red;
}
</style>
