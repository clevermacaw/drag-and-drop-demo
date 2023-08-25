<script setup lang="ts">
import { ref } from 'vue'
import { Container, Draggable, DropResult } from 'vue3-smooth-dnd'
import { v4 as uuidv4 } from 'uuid'
import ImageBlock from '@/components/ImageBlock.vue'
import TextBlock from '@/components/TextBlock.vue'
import ImageFormDialog from './ImageFormDialog.vue'
import TextFormDialog from '@/components/TextFormDialog.vue'
import { BlockItem, TextBlockItem, ImageBlockItem } from '@/types'

const items = ref<BlockItem[]>([])
const isTextDialogOpen = ref(false)
const isImageDialogOpen = ref(false)
const textFormContent = ref<TextBlockItem>({
  id: '',
  type: 'text',
  text: '',
})
const imageFormContent = ref<ImageBlockItem>({
  id: '',
  type: 'image',
  url: '',
})

function handleDrop(dropResult: DropResult) {
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
      result.splice(addedIndex, 0, itemToAdd)
    }
  }

  return result
}

function handleShowDialog(item: BlockItem) {
  if (item.type === 'text') {
    textFormContent.value = item
    isTextDialogOpen.value = true
  } else {
    imageFormContent.value = item
    isImageDialogOpen.value = true
  }
}

function handleCloseDialog(type: string) {
  if (type === 'text') isTextDialogOpen.value = false
  else isImageDialogOpen.value = false
}

function handleDeleteBlock(id: string) {
  const index = items.value.findIndex((it) => it.id === id)
  if (index !== -1) items.value.splice(index, 1)
}

function handleUpdateBlock(updatedItem: BlockItem) {
  handleCloseDialog(updatedItem.type)
  const item = items.value.find((it) => it.id === updatedItem.id)
  if (item) {
    if (item.type === 'text') item.text = (updatedItem as TextBlockItem).text
    else item.url = (updatedItem as ImageBlockItem).url
  }
}

function handleDuplicateBlock(duplicatedItem: BlockItem) {
  const index = items.value.findIndex((it) => it.id === duplicatedItem.id)
  if (index !== -1) {
    items.value.splice(index, 0, {
      ...items.value[index],
      id: uuidv4(),
    })
  }
}

function handleSavePageData() {
  console.log('Page data:', JSON.parse(JSON.stringify(items.value)))
}
</script>

<template>
  <div class="px-8 py-4 flex flex-col gap-4 h-full">
    <div class="flex justify-between">
      <h2 class="text-2xl text-center font-bold text-gray-800">Dropzone</h2>
      <button
        class="px-4 py-1 rounded bg-purple-500 hover:bg-purple-800 text-white"
        @click="handleSavePageData"
      >
        Save
      </button>
    </div>
    <Container
      group-name="blocks"
      class="flex-grow border-gray-800 border-2 border-dashed overflow-y-auto p-2 sm:h-auto"
      @drop="handleDrop"
    >
      <Draggable v-for="(item, i) in items" :key="item.id" class="py-2">
        <template v-if="item.type === 'text'">
          <TextBlock
            :item="item"
            @update="handleShowDialog"
            @duplicate="handleDuplicateBlock"
            @delete="handleDeleteBlock"
          />
        </template>
        <template v-else>
          <ImageBlock
            :item="item"
            @update="handleShowDialog"
            @duplicate="handleDuplicateBlock"
            @delete="handleDeleteBlock"
          />
        </template>
      </Draggable>
    </Container>
    <TextFormDialog
      :is-open="isTextDialogOpen"
      :form="textFormContent"
      @close="() => handleCloseDialog('text')"
      @save="handleUpdateBlock"
      @cancel="() => handleCloseDialog('text')"
    />
    <ImageFormDialog
      :is-open="isImageDialogOpen"
      :form="imageFormContent"
      @close="() => handleCloseDialog('image')"
      @save="handleUpdateBlock"
      @cancel="() => handleCloseDialog('image')"
    />
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

.smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper {
  vertical-align: initial;
}
</style>
