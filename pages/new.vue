<template>
  <div>
    <!-- Show skeleton loader while data is being fetched -->
    <div v-if="loading" class="skeleton-loader">
      <div class="skeleton-item" v-for="i in 3" :key="i"></div> <!-- Show 3 skeleton items -->
    </div>

    <!-- Display actual posts once loading is done -->
    <div v-else>
      <h1>Fetched Data from JSONPlaceholder</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Import the `ref` and `onMounted` to create reactive data and lifecycle hooks
import { ref, onMounted } from 'vue';

// Define the reactive variables
const loading = ref(true);  // Keeps track of loading state
const posts = ref([]);      // Stores fetched posts

// Fetch the data when the component is mounted
onMounted(async () => {
  try {
    // Fetch data from JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json();
    posts.value = data;  // Store the fetched posts
    loading.value = false; // Set loading to false to show actual content
  } catch (error) {
    console.error('Error fetching data:', error);
    loading.value = false;  // Stop loader even in case of error
  }
});
</script>

<style scoped>
.skeleton-loader {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skeleton-item {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  animation: skeleton-animation 1.2s ease-in-out infinite;
}

@keyframes skeleton-animation {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #c8c8c8;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>
