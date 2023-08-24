<script setup lang="ts">
import { PropType } from 'vue'
import EditIcon from '@/icons/EditIcon.vue'
import TrashIcon from '@/icons/TrashIcon.vue'
import { TextBlockItem } from '@/types'

defineProps({
  item: {
    type: Object as PropType<TextBlockItem>,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white shadow-lg">
    <div class="p-4 w-64 h-40">{{ item.text }}</div>
    <div class="flex justify-end gap-1.5 bg-slate-200 p-2">
      <button
        class="w-6 h-6 p-1 rounded-sm bg-blue-500 hover:bg-blue-800 text-white"
      >
        <edit-icon />
      </button>
      <button
        class="w-6 h-6 p-1 rounded-sm bg-red-500 hover:bg-red-800 text-white"
      >
        <trash-icon />
      </button>
    </div>
  </div>
</template>
