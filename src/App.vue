<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div
    class="bg-gray-300 dark:bg-gray-900 min-h-screen sm:min-h-0 sm:h-screen flex flex-col min-w-[300px]"
  >
    <nav-bar />
    <router-view class="sm:h-[calc(100%-64px)] p-4"></router-view>
  </div>
</template>
