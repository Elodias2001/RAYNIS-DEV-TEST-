<script setup>
import pages401 from '@images/pages/401.png'
import miscMaskDark from '@images/pages/misc-mask-dark.png'
import miscMaskLight from '@images/pages/misc-mask-light.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

definePageMeta({
  alias: '/pages/misc/not-authorized',
  layout: 'blank',
  public: true,
})

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      status-code="401"
      title="Vous n'êtes pas autorisé!🔐"
      description="Vous n'avez pas la permission d'accéder à cette page. Retournez à l'accueil !"
    />

    <VBtn
      class="mb-11"
      to="/"
    >
      Retournez à l'accueil
    </VBtn>

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="pages401"
        alt="not autorized"
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
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";
</style>
