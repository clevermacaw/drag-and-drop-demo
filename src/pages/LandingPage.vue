<!-- <script setup lang="ts">
import { ref } from 'vue'
import { Container, Draggable, DropResult } from 'vue3-smooth-dnd'

type Item = {
  id: number
  data: string
}

const items = ref<Item[]>([
  { id: 1, data: 'Princess Mononoke' },
  { id: 2, data: 'Spirited Away' },
  { id: 3, data: 'My Neighbor Totoro' },
  { id: 4, data: "Howl's Moving Castle" },
])

const items2 = ref<Item[]>([
  { id: 5, data: 'Princess Mononoke' },
  { id: 6, data: 'Spirited Away' },
  { id: 7, data: 'My Neighbor Totoro' },
  { id: 8, data: "Howl's Moving Castle" },
])

function onDrop(dropResult: DropResult) {
  console.log('###', dropResult)
  items2.value = applyDrag(items2.value, dropResult)
}

function applyDrag(arr: Item[], dragResult: DropResult) {
  const { removedIndex, addedIndex, payload } = dragResult

  if (removedIndex === null && addedIndex === null) return arr
  const result = [...arr]
  let itemToAdd = payload
  console.error('hello###', itemToAdd)

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }
  console.error('### result before return ###', result)
  return result
}

function getCardPayload1() {
  return (index: number) => {
    return items.value[index]
  }
}

function getCardPayload2() {
  return (index: number) => {
    return items2.value[index]
  }
}
</script>

<template>
  <div>
    <span>Studio Ghibli Tier List</span>
    <Container :get-child-payload="getCardPayload1()" behaviour="copy">
      <Draggable v-for="(item, i) in items" :key="item.id">
        <div>{{ i + 1 }} -> {{ item.data }}</div>
      </Draggable>
    </Container>
    <hr />
    <Container
      @drop="onDrop"
      group-name="second-container"
      :should-accept-drop="() => true"
      :get-child-payload="getCardPayload2()"
    >
      <Draggable v-for="(item, i) in items2" :key="item.id">
        <div>{{ i + 1 }} -> {{ item.data }}</div>
      </Draggable>
    </Container>
  </div>
</template>

<style scoped></style> -->

<template>
  <div>Landing page</div>
</template>
