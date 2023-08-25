<script setup lang="ts">
import { ref, PropType, onUpdated } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import clsx from 'clsx'
import { ImageBlockItem } from '@/types'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  form: {
    type: Object as PropType<ImageBlockItem>,
    required: true,
  },
})

const emit = defineEmits<{
  close: []
  save: [value: ImageBlockItem]
  cancel: []
}>()

const model = ref<ImageBlockItem>({
  id: '',
  type: 'image',
  url: '',
})

const imageUrls = [
  '/assets/block_image1.jpg',
  '/assets/block_image2.jpg',
  '/assets/block_image3.jpg',
]

function handleChangeImage(url: string) {
  model.value.url = url
}

function handleClose() {
  emit('close')
}

function handleSave(e: Event) {
  e.preventDefault()
  emit('save', model.value)
}

function handleCancel() {
  emit('cancel')
}

onUpdated(() => {
  model.value = Object.assign(model.value, props.form)
})
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog :open="isOpen" @close="handleClose">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-fit transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle class="font-medium">Image Edit</DialogTitle>
              <DialogDescription class="mt-4">
                Please pick the image
              </DialogDescription>

              <div class="flex flex-wrap gap-2 mt-4">
                <img
                  v-for="(url, i) in imageUrls"
                  :key="i"
                  :class="
                    clsx('w-48 h-48 object-cover', {
                      'border-4 border-red-600': url === model.url,
                    })
                  "
                  :src="url"
                  :alt="`Image-${i}`"
                  @click="() => handleChangeImage(url)"
                />
              </div>

              <div class="flex justify-end gap-1.5 mt-4 p-2">
                <button
                  class="px-4 py-1 rounded bg-blue-500 hover:bg-blue-800 text-white"
                  @click="handleSave"
                >
                  Save
                </button>
                <button
                  class="px-4 py-1 rounded bg-gray-500 hover:bg-gray-800 text-white"
                  @click="handleCancel"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
