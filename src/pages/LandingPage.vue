<script setup lang="ts">
import BlockGallery from '@/components/BlockGallery.vue'
import BlockDropzone from '@/components/BlockDropzone.vue'
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <div class="">
      <block-gallery />
    </div>
    <div class="h-full border-r-4 hidden sm:block" />
    <div class="w-full border-t-4 block sm:hidden" />
    <div class="flex-grow h-[calc(100vh-150px)] sm:h-auto">
      <block-dropzone />
    </div>
  </div>
</template>

<style scoped></style>
