<template>
    <div>
        <h1>{{ data }}</h1>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const key = route.params.key;

const { data, error, refresh } = useFetch('https://fakestoreapi.com/products');
console.log(data);
console.log(key);

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
