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
import { TextBlockItem } from '@/types'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  form: {
    type: Object as PropType<TextBlockItem>,
    required: true,
  },
})

const emit = defineEmits<{
  close: []
  save: [value: TextBlockItem]
  cancel: []
}>()

const model = ref<TextBlockItem>({
  id: '',
  type: 'text',
  text: '',
})

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
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle class="font-medium">Text Edit</DialogTitle>
              <DialogDescription class="mt-4">
                Please modify the text content of the block
              </DialogDescription>

              <form @submit="handleSave">
                <input
                  v-model="model.text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter the content"
                  required
                />

                <div class="flex justify-end gap-1.5 mt-4 p-2">
                  <button
                    class="px-4 py-1 rounded bg-blue-500 hover:bg-blue-800 text-white"
                    type="submit"
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
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
