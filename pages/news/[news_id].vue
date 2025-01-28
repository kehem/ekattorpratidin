<template>
    <NuxtLayout>
        <h1>{{ data }}</h1>
    </NuxtLayout>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const key = route.params.news_id;

const { data } = useFetch('https://fakestoreapi.com/products');

</script>

<style>
.error {
    color: red;
}
</style>
