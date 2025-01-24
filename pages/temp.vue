<!-- Loading TEMPLATE -->
<template>
    <div>
        <div v-if="loading" class="skeleton">
            LOADING
        </div>
        <div v-else>
            {{ data }}
        </div>
    </div>
</template>

<script setup>
const { loading, data } = useFetch('https://newstest.kehem.com/api/leadtopnews');
</script>

<style>
.skeleton {
    width: 100%;
    height: 5rem;
    background: #343333;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {

    0%,
    100% {
        background-color: #544e4e;
    }

    50% {
        background-color: #673232;
    }
}
</style>

