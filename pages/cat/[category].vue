<template>
    <NuxtLayout>
        <h1>{{ category }}</h1>

        <p>{{ data }}</p>
    </NuxtLayout>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const category = route.params.category;

const { data } = await useFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/front-cat-news.json');

</script>

<style scoped>
.error {
    color: red;
}
</style>
