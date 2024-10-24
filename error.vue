<script setup>
import { useGenerateImageVariant } from "@core/composable/useGenerateImageVariant"
import misc404 from "@images/pages/404.png"
import miscMaskDark from "@images/pages/misc-mask-dark.png"
import miscMaskLight from "@images/pages/misc-mask-light.png"

const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
})

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

defineOptions({
  inheritAttrs: false,
})

const isDev = process.dev

const errToShow = computed(() => {
  const is404 = props.error?.statusCode === 404 || props.error.message?.includes("404")

  if (is404) {
    return {
      title: "Page non trouvée",
      description: "Nous n'avons pas pu trouver la page que vous recherchez.",
    }
  } else if (isDev) {
    return {
      title: props.error?.statusMessage,
      description: props.error.message,
    }
  }

  return {
    title: "Oups ! Quelque chose a mal tourné.",
    description: "Nous y travaillons et nous allons le réparer dès que possible.",
  }
})

const handleError = () => clearError({ redirect: "/" })
</script>

<template>
  <NuxtLayout name="blank">
    <div class="misc-wrapper">
      <ErrorHeader
        :status-code="props.error.statusCode"
        :title="errToShow.title"
        :description="errToShow.description"
      />

      <!-- eslint-disable vue/no-v-html -->
      <div
        v-if="isDev"
        style="max-inline-size: 80dvw; overflow-x: scroll"
        v-html="error.stack"
      />
      <!-- eslint-enable -->

      <VBtn
        class="mb-11"
        @click="handleError"
      >
        Retourner sur vos pas !
      </VBtn>

      <!-- 👉 Image -->
      <div class="misc-avatar w-100 text-center">
        <VImg
          :src="misc404"
          alt="error 404"
          :max-height="$vuetify.display.smAndDown ? 350 : 500"
          class="mx-auto"
        />
      </div>

      <img
        class="misc-footer-img d-none d-md-block"
        :src="authThemeMask"
        alt="misc-footer-img"
        height="320"
      >
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
  @use "@core/scss/template/pages/misc.scss";
</style>
