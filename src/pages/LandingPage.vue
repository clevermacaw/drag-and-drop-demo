<script setup lang="ts">
import BlockGallery from '@/components/BlockGallery.vue'
import BlockDropzone from '@/components/BlockDropzone.vue'
</script>

<template>
  <div class="flex flex-col sm:flex-row justify-center">
    <div class="">
      <BlockGallery />
    </div>
    <div class="h-full border-r-4 hidden sm:block" />
    <div class="w-full border-t-4 block sm:hidden" />
    <div class="w-full sm:w-80 h-[calc(100vh-150px)] sm:h-auto">
      <BlockDropzone />
    </div>
  </div>
</template>

<style scoped></style>
