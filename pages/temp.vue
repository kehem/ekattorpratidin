<template>
  <Suspense>
    <template #default>
      <NuxtLayout>
        <div v-if="user">
        <img :src="user.avatar" alt="User Avatar" class="avatar" />
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
      </div>
      </NuxtLayout>
    </template>
    <template #fallback>
      <NuxtLayout>
        <SkeletonLoader />
      </NuxtLayout>
    </template>
  </Suspense>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const user = ref(null);

onMounted(async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  user.value = data.results[0];
});
</script>

<style scoped>
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
