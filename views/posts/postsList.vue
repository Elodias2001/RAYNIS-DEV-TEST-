<template>
  <section>
    <VCard>
      <VCardText class="d-flex flex-wrap gap-4">
        <div class="d-flex align-center gap-2">
          <p class="text-body-1 mb-0">
            Afficher
          </p>
          <AppSelect
            v-model="itemsPerPage"
            :items="[
              { value: 5, title: '5' },
              { value: 10, title: '10' },
              { value: 25, title: '25' },
              { value: 50, title: '50' },
              { value: 100, title: '100' },
              { value: -1, title: 'All' },
            ]"
            style="inline-size: 5.5rem"
          />

          <!-- 👉 Search  -->
          <AppTextField
            v-model="searchQuery"
            placeholder="Rechercher une classe"
            style="inline-size: 15.625rem"
          />
        </div>

        <VSpacer />

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Add post button -->
          <VBtn
            density="default"
            prepend-icon="tabler-plus"
            @click="isAddModuleDialogVisible = true"
          >
            AJOUTER
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <!-- Loader -->
      <div
        v-if="isLoading"
        class="loader"
      >
        <MyPromiseIcon />
        Loading...
      </div>

      <!-- Message when no data -->
      <div
        v-else-if="!items || items.length === 0"
        class="no-data-message"
      >
        Aucune donnée disponible.
      </div>


      <!-- SECTION datatable -->
      <!-- v-if="!isLoading" -->
      <VDataTableServer
        v-else
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-per-page-options="[
          { value: 5, title: '5' },
          { value: 10, title: '10' },
          { value: 20, title: '20' },
          { value: 50, title: '50' },
          { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
        ]"
        :items="items"
        :items-length="totalItems"
        :headers="headers"
        class="text-no-wrap"
        show-select
        @update:options="updateOptions"
      >
        <!-- Name -->
        <template #item.title="{ item }">
          <div>{{ item.title }}</div>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <VBtn
            icon
            size="small"
            color="medium-emphasis"
            variant="text"
            @click.prevent="editItem(item)"
          >
            <VIcon
              size="22"
              icon="tabler-edit"
              color="warning"
            />
            <VTooltip
              location="top"
              activator="parent"
            >
              Modifier
            </VTooltip>
          </VBtn>
          
          <!--  -->
          <IconBtn @click="deleteItem(item)">
            <VIcon
              icon="tabler-trash"
              color="#FF4C51"
            />
            <VTooltip
              location="top"
              activator="parent"
            >
              Supprimer
            </VTooltip>
          </IconBtn>
        </template>

        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalItems"
          />
        </template>
      </VDataTableServer>
      <!-- SECTION -->
    </VCard>

    <AddEditPost
      v-model:isDialogVisible="isModuleDialogVisible"
      v-model:post-id="itemId"
    />
    
    <AddEditPost v-model:isDialogVisible="isAddModuleDialogVisible" />
    
    <!-- Confirm Dialog Delete -->
    <DeletePost
      v-model:isDialogVisible="isDeleteItem"
      v-model:post-id="itemId"
      confirmation-question="Êtes-vous sûr(e) de vouloir supprimer cette classe ?"
      confirm-title="Classe"
      confirm-msg="Classe supprimé avec succès !"
      cancel-title="Classe"
      cancel-msg="Suppression annulée !"
    />

    <!-- Confirm Dialog Status -->
    <!-- -->
  </section>
</template>

<script setup>
// eslint-disable-next-line import/extensions, import/no-unresolved
// eslint-disable-next-line import/extensions, import/no-unresolved
import { usePostsStore } from '@/stores/posts'
import MyPromiseIcon from '~/components/Notifs/MyPromiseIcon'

const isLoading = ref(false)
const itemStore = usePostsStore()

const isDeleteItem = ref(false)
const isStatusItem = ref(false)

const isModuleDialogVisible = ref(false)
const isViewModuleDialogVisible = ref(false)
const isAddModuleDialogVisible = ref(false)
const itemId = ref(null)

const editItem = async partner => {
  itemId.value = partner.id
  isModuleDialogVisible.value = true
}

const viewItem = async partner => {
  itemId.value = partner.id
  isViewModuleDialogVisible.value = true
}

const deleteItem = async partner => {
  itemId.value = partner.id
  isDeleteItem.value = true
}


const searchQuery = ref("")
const selectedPublished = ref(null)

// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  { title: "Libelle", key: "title" },
  { title: "Actions", key: "actions", sortable: false },
]

const fetchItems = async () => {
  isLoading.value = true
  await itemStore.getItems({
    q: searchQuery.value,
    statut: selectedPublished.value,
    sortBy: sortBy.value,
    orderBy: orderBy.value,
    itemsPerPage: itemsPerPage.value,
    page: page.value,
  })
  isLoading.value = false
}

const items = computed(() => itemStore.items)
const totalItems = computed(() => itemStore.totalItems)

watchEffect(fetchItems)
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
}

.loader svg {
  margin-right: 8px;
}

.no-data-message {
  text-align: center;
  font-size: 1.2em;
  color: #888;
  margin: 20px 0;
}

.text-capitalize {
  text-transform: capitalize;
}

.text-no-wrap {
  white-space: nowrap;
}
</style>


<style lang="scss">
.text-capitalize {
  text-transform: capitalize;
}

.text-no-wrap {
  white-space: nowrap;
}
</style>
