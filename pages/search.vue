<template>
    <NuxtLayout>
        <h1>Search Results for: "{{ searchQuery }}"</h1>
    </NuxtLayout>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
let searchQuery = route.query.q || '';
searchQuery = decodeURIComponent(searchQuery);
</script>
