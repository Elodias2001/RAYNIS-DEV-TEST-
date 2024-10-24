<!-- eslint-disable import/extensions -->
<!-- eslint-disable import/no-unresolved -->
<script setup>

// import { useAuthStore } from "~/stores/auth"

// const societeStore = useSocieteStore()
// const authStore = useAuthStore()
const imgSociete = ref(null)

// const  getBasename = url =>{
//   // Créer un nouvel objet URL à partir de l'URL donnée
//   const parsedUrl = new URL(url)
  
//   // Extraire le chemin complet de l'URL
//   const pathname = parsedUrl.pathname
  
//   // Diviser le chemin en segments et retourner le dernier segment (basename)
//   const segments = pathname.split('/')
  
//   // eslint-disable-next-line sonarjs/no-identical-expressions
//   return segments.pop() || segments.pop() // Traiter les cas où il y a un slash à la fin
// }

// onMounted(async () => {
//   // if(authStore.getCategUsModel == "Super Admin" || authStore.getCategUsModel == "Admin")
//   // {
//   //   await societeStore.fetchSociete()
  
//   //   const response = societeStore.getSociete
  
//   imgSociete.value = isEmpty(response.logo_url) || (getBasename(response.logo_url) === "logo.png") ? avatar1 : response.logo_url

//   // }else{
//   //   imgSociete.value = authStore.getUser.image_url
//   // }
// })
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    bordered
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg :src="imgSociete" />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg :src="imgSociete" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              RAYNIS
            </VListItemTitle>
            <VListItemSubtitle>RAYNIS</VListItemSubtitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Profile -->
          <VListItem
            link
            :to="{ name: 'admin-gerant-tab', params: { tab: 'account' } }"
          >
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-user"
                size="22"
              />
            </template>

            <VListItemTitle>Profil</VListItemTitle>
          </VListItem>

          <!-- 👉 Settings -->
          <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-settings"
                size="22"
              />
            </template>

            <VListItemTitle>Settings</VListItemTitle>
          </VListItem>

          <!-- 👉 Pricing -->
          <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-currency-dollar"
                size="22"
              />
            </template>

            <VListItemTitle>Pricing</VListItemTitle>
          </VListItem>

          <!-- 👉 FAQ -->
          <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-help"
                size="22"
              />
            </template>

            <VListItemTitle>FAQ</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-logout"
                size="22"
              />
            </template>

            <VListItemTitle>Logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
