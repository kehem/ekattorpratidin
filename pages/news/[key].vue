<template>
    <div>
        <h1>{{ data }}</h1>
        <!-- <h1>{{ news.title }}</h1>
        <p>{{ news.body }}</p>
        <p v-if="loading">Loading...</p>
        <p v-if="error" class="error">{{ error }}</p> -->
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const key = route.params.key;

const { data, error, refresh } = useFetch('https://fakestoreapi.com/products');
console.log(data);
console.log(key);


</script>

<style>
.error {
    color: red;
}
</style>
