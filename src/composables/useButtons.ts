import EditIcon from '@/icons/EditIcon.vue'
import TrashIcon from '@/icons/TrashIcon.vue'

export default function useButtons() {
  return {
    classes: {
      edit: 'w-6 h-6 p-1 rounded-sm bg-blue-500 hover:bg-blue-800 text-white',
      delete: 'w-6 h-6 p-1 rounded-sm bg-red-500 hover:bg-red-800 text-white',
    },
    EditIcon,
    TrashIcon,
  }
}
