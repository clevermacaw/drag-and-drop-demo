<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="bg-gray-300 dark:bg-gray-900 h-screen flex flex-col">
    <nav-bar />
    <router-view class="flex-grow p-4"></router-view>
  </div>
</template>
