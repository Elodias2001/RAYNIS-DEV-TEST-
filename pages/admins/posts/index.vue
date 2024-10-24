<!-- eslint-disable import/no-unresolved -->
<script setup>
import PostsList from "@/views/posts/postsList.vue"
import { useGenerateBgVariant } from "@core/composable/useGenerateColorVariant"

const bgTitleDay = "#003a7b"
const bgTitleNight = "#003a7b"

const moduleTitleBg = useGenerateBgVariant(
  bgTitleDay,
  bgTitleNight,
  bgTitleDay,
  bgTitleNight,
  true,
)

definePageMeta({
  // layout: "blank",

  // middleware: ["guest"],
})
</script>

<template>
  <section>
    <VCard class="mb-2">
      <VCardText>
        <VRow>
          <!-- 👉 Select Role -->
          <VCol
            cols="12"
            sm="12"
          >
            <VAlert
              outlined
              :style="`background-color: ${moduleTitleBg}`"
            >
              <h4 style="color: white">
                <VIcon
                  color="white"
                  icon="tabler-door-exit"
                />
                Liste des Posts
              </h4>
            </VAlert>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
    <VRow>
      <VCol cols="12">
        <PostsList />
      </VCol>
    </VRow>
  </section>
</template>
