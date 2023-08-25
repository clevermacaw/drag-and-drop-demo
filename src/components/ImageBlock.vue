<script setup lang="ts">
import { PropType } from 'vue'
import useButtons from '@/composables/useButtons'
import { ImageBlockItem } from '@/types'

const { classes, DuplicateIcon, EditIcon, TrashIcon } = useButtons()

const props = defineProps({
  item: {
    type: Object as PropType<ImageBlockItem>,
    required: true,
  },
})

const emit = defineEmits<{
  update: [item: ImageBlockItem]
  duplicate: [item: ImageBlockItem]
  delete: [id: string]
}>()

function handleUpdate() {
  emit('update', props.item)
}

function handleDuplicate() {
  emit('duplicate', props.item)
}

function handleDelete() {
  emit('delete', props.item.id)
}
</script>

<template>
  <div class="bg-white shadow-lg">
    <img
      class="w-full aspect-square object-cover"
      :src="item.url"
      :alt="`Image-${item.id}`"
    />
    <div class="flex justify-end gap-1.5 bg-slate-200 p-2">
      <button :class="classes.edit" @click="handleUpdate">
        <EditIcon />
      </button>
      <button :class="classes.duplicate" @click="handleDuplicate">
        <DuplicateIcon />
      </button>
      <button :class="classes.delete" @click="handleDelete">
        <TrashIcon />
      </button>
    </div>
  </div>
</template>
