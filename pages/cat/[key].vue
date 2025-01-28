<template>
    <NuxtLayout>
        <h1>{{ key }}</h1>

        <p>{{ data }}</p>
    </NuxtLayout>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const key = route.params.key;

const { data, error, refresh } = useFetch('https://newstest.kehem.com/testcategory');

</script>

<style scoped>
.error {
    color: red;
}
</style>
