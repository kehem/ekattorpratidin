<template>
    <div>
        <h1>{{ key }}</h1>

        <p>{{ data[0] }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const key = route.params.key;

const { data, error, refresh } = useFetch('https://fakestoreapi.com/products');

</script>

<style>
.error {
    color: red;
}
</style>
