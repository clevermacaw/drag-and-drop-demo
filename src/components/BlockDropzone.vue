<script setup lang="ts">
import { ref } from 'vue'
import { Container, Draggable, DropResult } from 'vue3-smooth-dnd'
import { v4 as uuidv4 } from 'uuid'
import ImageBlock from '@/components/ImageBlock.vue'
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
    if (itemToAdd.new) {
      if (itemToAdd.type === 'text')
        result.splice(addedIndex, 0, {
          id: uuidv4(),
          type: 'text',
          text: 'Random text',
        })
      else
        result.splice(addedIndex, 0, {
          id: uuidv4(),
          type: 'image',
          url: `/assets/block_image${Math.floor(Math.random() * 3) + 1}.jpg`,
        })
    } else {
      result.splice(addedIndex, 0, itemToAdd.item)
    }
  }

  return result
}

function getItemPayload() {
  return (index: number) => {
    return {
      new: false,
      item: items.value[index],
    }
  }
}
</script>

<template>
  <div class="px-8 py-4 flex flex-col gap-4 h-full">
    <h2 class="text-2xl text-center font-bold text-gray-800">Dropzone</h2>
    <container
      group-name="blocks"
      class="flex flex-wrap flex-grow content-baseline border-gray-800 border-2 border-dashed overflow-y-auto p-2 gap-4 sm:h-auto"
      orientation="horizontal"
      :get-child-payload="getItemPayload()"
      @drop="onDrop"
    >
      <draggable v-for="(item, i) in items" :key="item.id">
        <template v-if="item.type === 'text'">
          <text-block :item="item" />
        </template>
        <template v-else>
          <image-block :item="item" />
        </template>
      </draggable>
    </container>
  </div>
</template>

<style scoped>
.smooth-dnd-container.horizontal {
  display: flex;
}
.smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper {
  display: block;
  height: auto;
}
</style>
