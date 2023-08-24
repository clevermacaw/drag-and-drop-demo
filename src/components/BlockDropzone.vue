<script setup lang="ts">
import { ref } from 'vue'
import { Container, Draggable, DropResult } from 'vue3-smooth-dnd'
import { v4 as uuidv4 } from 'uuid'
import TextBlock from '@/components/TextBlock.vue'
import { BlockItem } from '@/types'

const items = ref<BlockItem[]>([])

function onDrop(dropResult: DropResult) {
  items.value = applyDrag(items.value, dropResult)
}

function applyDrag(arr: BlockItem[], dragResult: DropResult) {
  const { removedIndex, addedIndex, payload } = dragResult

  if (removedIndex === null && addedIndex === null) return arr
  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }
  if (addedIndex !== null) {
    if (itemToAdd.type === 'text')
      result.splice(addedIndex, 0, {
        id: uuidv4(),
        type: 'text',
        text: 'Random text',
      })
  }

  return result
}
</script>

<template>
  <div class="px-8 py-4 flex flex-col gap-4 h-full">
    <h2 class="text-2xl text-center font-bold text-gray-800">Dropzone</h2>
    <Container
      group-name="blocks"
      class="flex flex-grow gap-4 p-2 border-gray-800 border-2 border-dashed"
      drag-class="bg-primary dark:bg-primary 
            border-2 border-primary-hover text-white 
            transition duration-100 ease-in z-50
            transform rotate-6 scale-110"
      drop-class="transition duration-100 
            ease-in z-50 transform 
            -rotate-2 scale-90"
      @drop="onDrop"
    >
      <Draggable v-for="(item, i) in items" :key="item.id">
        <template v-if="item.type === 'text'">
          <text-block :text="item.text" />
        </template>
      </Draggable>
    </Container>
  </div>
</template>
