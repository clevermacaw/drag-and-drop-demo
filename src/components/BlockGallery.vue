<script setup lang="ts">
import { ref } from 'vue'
import { Container, Draggable } from 'vue3-smooth-dnd'

const blocks = ref([
  {
    type: 'text',
    name: 'Text',
  },
  {
    type: 'image',
    name: 'Image',
  },
])

function getBlockPayload() {
  return (index: number) => {
    return {
      new: true,
      type: blocks.value[index].type,
    }
  }
}
</script>

<template>
  <div class="px-8 py-4">
    <h2 class="text-2xl text-center font-bold text-gray-800">Blocks</h2>
    <Container
      group-name="blocks"
      behaviour="copy"
      :get-child-payload="getBlockPayload()"
      class="flex sm:flex-col gap-4 mt-4"
      drag-class="border-2 text-white 
        transition duration-100 ease-in z-50
        transform rotate-6 scale-110"
    >
      <Draggable v-for="(block, i) in blocks" :key="block.type">
        <div
          class="text-lg font-medium w-full p-4 flex justify-center items-center shadow-md bg-white rounded-sm cursor-pointer"
        >
          {{ block.name }}
        </div>
      </Draggable>
    </Container>
  </div>
</template>
