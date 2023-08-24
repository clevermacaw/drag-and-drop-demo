<script setup lang="ts">
// import { ref } from 'vue'
// import { Container, Draggable, DropResult } from 'vue3-smooth-dnd'

// type Item = {
//   id: number
//   data: string
// }

// const items = ref<Item[]>([
//   { id: 1, data: 'Princess Mononoke' },
//   { id: 2, data: 'Spirited Away' },
//   { id: 3, data: 'My Neighbor Totoro' },
//   { id: 4, data: "Howl's Moving Castle" },
// ])

// const items2 = ref<Item[]>([
//   { id: 5, data: 'Princess Mononoke' },
//   { id: 6, data: 'Spirited Away' },
//   { id: 7, data: 'My Neighbor Totoro' },
//   { id: 8, data: "Howl's Moving Castle" },
// ])

// function onDrop(dropResult: DropResult) {
//   console.log('###', dropResult)
//   items2.value = applyDrag(items2.value, dropResult)
// }

// function applyDrag(arr: Item[], dragResult: DropResult) {
//   const { removedIndex, addedIndex, payload } = dragResult

//   if (removedIndex === null && addedIndex === null) return arr
//   const result = [...arr]
//   let itemToAdd = payload
//   console.error('hello###', itemToAdd)

//   if (removedIndex !== null) {
//     itemToAdd = result.splice(removedIndex, 1)[0]
//   }
//   if (addedIndex !== null) {
//     result.splice(addedIndex, 0, itemToAdd)
//   }
//   console.error('### result before return ###', result)
//   return result
// }

// function getCardPayload1() {
//   return (index: number) => {
//     return items.value[index]
//   }
// }

// function getCardPayload2() {
//   return (index: number) => {
//     return items2.value[index]
//   }
// }
import BlockGallery from '@/components/BlockGallery.vue'
</script>

<template>
  <div class="flex">
    <div class="">
      <block-gallery />
    </div>
    <div class="h-full border-r-4"></div>
    <div class="flex-grow"></div>
  </div>
</template>

<style scoped></style>
