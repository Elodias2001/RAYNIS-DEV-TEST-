<script setup>
// eslint-disable-next-line import/extensions, import/no-unresolved
import { usePostsStore } from '@/stores/posts';

const props = defineProps({
  confirmationQuestion: {
    type: String,
    required: true,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  confirmTitle: {
    type: String,
    required: true,
  },
  confirmMsg: {
    type: String,
    required: true,
  },
  cancelTitle: {
    type: String,
    required: true,
  },
  cancelMsg: {
    type: String,
    required: true,
  },
  postId: {
    type: Number,
    required: false,
  },
})

const emit = defineEmits(["update:isDialogVisible", "confirm", 'update:postId'])

const postStore = usePostsStore()

const form = reactive({
  id: '',
  title: '',
})

const unsubscribed = ref(false)
const cancelled = ref(false)

const updateModelValue = async val => {
  await emit("update:isDialogVisible", val)
  await emit("update:postId", Number(0))
}

const onConfirmation = async () => {
  await submitForm()
}

const onCancel = () => {
  emit("update:isDialogVisible", false)
}

const fetchPostData = async () => {
  try {
    const response = await postStore.getItemById(props.postId)

    form.id = response.id
    form.title = response.title
  } catch (error) {
    console.log('Categ User Error', error)
  }
}

watch(() => props.postId, async newId => {
  const id = Number(props.postId)
  if (!isNaN(id) && typeof id == 'number' && id !== 0)
  {
    await fetchPostData() 
  }
})

const submitForm = async () => {
  const notification = push.promise("Veuillez patientez, quelques instants...")
  if (!isEmpty(props.postId)) {
    await postStore.deleteItem(props.postId, notification)
    if(postStore.statusOp === true)
    {
      await updateModelValue(false)
      postStore.statusOp = false
    }  
  }
}
</script>

<template>
  <!-- 👉 Confirm Dialog -->
  <VDialog
    max-width="500"
    :model-value="props.isDialogVisible"
    @update:model-value="updateModelValue"
  >
    <VCard class="px-10 py-6 text-center">
      <VCardText>
        <VBtn
          icon
          variant="outlined"
          color="warning"
          class="my-4"
          style="block-size: 88px; inline-size: 88px; pointer-events: none"
        >
          <span class="text-5xl">!</span>
        </VBtn>

        <h6 class="font-weight-medium text-lg">
          {{ props.confirmationQuestion }}
        </h6>
      </VCardText>

      <VCardText class="d-flex align-center justify-center gap-2">
        <VBtn
          variant="elevated"
          @click="onConfirmation"
        >
          Supprimer
        </VBtn>

        <VBtn
          color="secondary"
          variant="tonal"
          @click="onCancel"
        >
          Annuler
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
