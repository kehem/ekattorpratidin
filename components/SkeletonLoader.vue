<template>
  <div class="skeleton-loader">
    <div class="skeleton-avatar"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text"></div>
  </div>
</template>

<style scoped>
.skeleton-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #414141;
}

.skeleton-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #414141;
  margin-bottom: 10px;
}

.skeleton-text {
  width: 80%;
  height: 10px;
  background-color: #414141;
  margin: 5px 0;
}
</style>
