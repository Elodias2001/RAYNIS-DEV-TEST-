<script setup>
// eslint-disable-next-line import/no-unresolved
import { useConfigStore } from "@core/stores/config"
// eslint-disable-next-line import/no-unresolved
import { AppContentLayoutNav } from "@layouts/enums"
// eslint-disable-next-line import/no-unresolved
import { switchToVerticalNavOnLtOverlayNavBreakpoint } from "@layouts/utils"

const DefaultLayoutWithHorizontalNav = defineAsyncComponent(
  () => import("./components/DefaultLayoutWithHorizontalNav.vue"),
)

const DefaultLayoutWithVerticalNav = defineAsyncComponent(
  () => import("./components/DefaultLayoutWithVerticalNav.vue"),
)

const configStore = useConfigStore()

// ℹ️ This will switch to vertical nav when define breakpoint is reached when in horizontal nav layout

// Remove below composable usage if you are not using horizontal nav layout in your app
switchToVerticalNavOnLtOverlayNavBreakpoint()

const { layoutAttrs, injectSkinClasses } = useSkins()

injectSkinClasses()
</script>

<template>
  <Component
    v-bind="layoutAttrs"
    :is="
      configStore.appContentLayoutNav === AppContentLayoutNav.Vertical
        ? DefaultLayoutWithVerticalNav
        : DefaultLayoutWithHorizontalNav
    "
  >
    <slot />
  </Component>
</template>

<style lang="scss">
  // As we are using `layouts` plugin we need its styles to be imported
  @use "@layouts/styles/default-layout";
</style>
