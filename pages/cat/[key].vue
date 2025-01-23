<template>
    <div>
        <h1>{{ key }}</h1>

        <p>{{ data }}</p>
    </div>
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
