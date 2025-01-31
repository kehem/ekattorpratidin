<template>
    <NuxtLayout>
        <h1>Search Results for: "{{ searchQuery }}"</h1>
        <p> {{ searchData }}</p>
    </NuxtLayout>
</template>

<script setup>

import { useRoute } from 'vue-router';
const route = useRoute();
let searchQuery = route.query.q || '';
searchQuery = decodeURIComponent(searchQuery);


const { data:searchData, error } = await useFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/front-cat-news.json');
    if (error) {
        searchData.value = 'Failed to Fetch API';
    } else {
        searchData.value = data;
    }

</script>
