<script setup lang="ts">
import { PropType } from 'vue'
import useButtons from '@/composables/useButtons'
import { ImageBlockItem } from '@/types'

const { classes, EditIcon, TrashIcon } = useButtons()

defineProps({
  item: {
    type: Object as PropType<ImageBlockItem>,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white shadow-lg">
    <img
      class="w-40 h-40 object-cover"
      :src="item.url"
      :alt="`Image-${item.id}`"
    />
    <div class="flex justify-end gap-1.5 bg-slate-200 p-2">
      <button :class="classes.edit">
        <EditIcon />
      </button>
      <button :class="classes.delete">
        <TrashIcon />
      </button>
    </div>
  </div>
</template>
