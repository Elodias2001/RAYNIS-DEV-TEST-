<!-- eslint-disable import/no-unresolved -->
<!-- eslint-disable import/extensions -->
<!-- eslint-disable camelcase -->
<script setup>
import { usePostsStore } from '@/stores/posts'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  postId: {
    type: Number,
    required: false,
  },
})

const emit = defineEmits(["update:isDialogVisible", "update:postId"])

const postStore = usePostsStore()
const postForm = ref(null)

const form = reactive({
  title: '',
})

const resetForm = () =>{
  form.title = ''
}

const onReset = () => {
  emit("update:isDialogVisible", false)
}

const onSubmit = () => {
  emit("update:isDialogVisible", false)
  emit("update:postId", Number(0))
}

const closeForm = async () => {
  await emit("update:isDialogVisible", false)
  await emit("update:postId", Number(0))
  await resetForm()
}

const fetchCategUserData = async () => {
  try {
    const response = await postStore.getItemById(props.postId)

    form.title = response.title
  } catch (error) {
    console.log('Categ User Error', error)
  }
}

watch(() => props.postId, async newId => {
  const id = Number(props.postId)
  if (!isNaN(id) && typeof id == 'number' && id !== 0)
  {
    await fetchCategUserData() 
  }
})

const submitForm = async () => {
  
  postForm.value.validate().then(async response => {
    if (response.valid === true) {
      const notification = push.promise("Veuillez patientez, quelques instants...")

      if (!isEmpty(props.postId)) {
       
        await postStore.updateItem(props.postId, form, notification)
        if(postStore.statusOp === true)
        {
          await closeForm()
          postStore.statusOp = false
        }
      
      } else {
       
        await postStore.storeItem(form, notification)
        if(postStore.statusOp === true)
        {
          await closeForm()
          postStore.statusOp = false
        }
        
      }

    }
  }).catch(err => {
    console.error("Form validation failed:", err)
  })
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 600"
    :model-value="props.isDialogVisible"
    persistent
    class="v-dialog-sm"
    @update:model-value="onReset"
  >
    <!-- 👉 dialog close btn -->
    <DialogCloseBtn @click="onReset" />

    <VCard class="pa-2 pa-sm-10">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 mb-2 text-center">
          {{ props.postId ? "Modifier Un" : "Ajouter Un" }} Post
        </h4>

        <!-- 👉 Form -->
        <VForm
          ref="postForm"
          @submit.prevent="submitForm"
        >
          <VCardText>
            <VRow>
              <!-- Nom -->
              <VCol cols="12">
                <h5>
                  title
                  <span style="color:red">*</span>
                </h5>
                <VTextField
                  id="title"
                  v-model="form.title"
                  prepend-inner-icon="tabler-signature"
                  :rules="[ruleRequired]"
                />
                <span
                  v-if="postStore.errors.title"
                  class="text-danger"
                  style="color:red;"
                >
                  {{ postStore.errors.title[0] }}
                </span>
              </VCol>
              
              <VCol cols="12">
                <!-- <VCardText class="d-flex justify-start flex-wrap gap-3"> -->
                <VBtn
                  type="submit"
                  variant="tonal"
                  color="success"
                  class="me-3"
                  :disabled="postStore.loading"
                >
                  {{ props.postId ? "Modifier" : "Enrégistrer" }}
                  <VProgressCircular
                    v-if="postStore.loading"
                    indeterminate
                    color="primary"
                    class="mx-2"
                    size="20"
                  />
                </VBtn>
                <VBtn
                  type="reset"
                  variant="tonal"
                  color="error"
                  @click="onReset"
                >
                  Annuler
                </VBtn>
                <!-- </VCardText> -->
              </VCol>
            </VRow>
          </VCardText>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
  .categ-table {
    td {
      border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
      padding-block: 0.5rem;
      padding-inline: 0;
    }
  }
</style>
