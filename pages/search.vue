<template>
    <NuxtLayout>
        <h1>Search Results for: "{{ searchQuery }}"</h1>
        <p> {{ searchData }}</p>
    </NuxtLayout>
</template>

<script setup>
import { getStaticPaths } from 'nitropack/presets/netlify/utils';
import { useRoute } from 'vue-router';
const route = useRoute();
let searchQuery = route.query.q || '';
searchQuery = decodeURIComponent(searchQuery);


let searchData = ref(null);
const { $getAPI } = useNuxtApp();
console.log($getAPI);

const searchFunc = async () => {
    const { data, error } = await $getAPI('https://surajit-singha-sisir.github.io/mastorsCDN/JS/front-cat-news.json');
    if (error) {
        searchData.value = 'Failed to Fetch API';
    } else {
        searchData.value = data;
    }
}

onMounted(searchFunc);

</script>
