<script setup lang="ts">
import { PropType } from 'vue'
import useButtons from '@/composables/useButtons'
import { TextBlockItem } from '@/types'

const { classes, EditIcon, TrashIcon } = useButtons()

const props = defineProps({
  item: {
    type: Object as PropType<TextBlockItem>,
    required: true,
  },
})

const emit = defineEmits<{
  update: [item: TextBlockItem]
  delete: [id: string]
}>()

function handleUpdate() {
  emit('update', props.item)
}

function handleDelete() {
  emit('delete', props.item.id)
}
</script>

<template>
  <div class="bg-white shadow-lg">
    <div class="p-4 w-64 h-40">{{ item.text }}</div>
    <div class="flex justify-end gap-1.5 bg-slate-200 p-2">
      <button :class="classes.edit" @click="handleUpdate">
        <EditIcon />
      </button>
      <button :class="classes.delete" @click="handleDelete">
        <trash-icon />
      </button>
    </div>
  </div>
</template>
