<script setup>
  // Components
  import Footer from "@/layouts/components/Footer.vue";
  import NavbarThemeSwitcher from "@/layouts/components/NavbarThemeSwitcher.vue";
  import UserProfile from "@/layouts/components/UserProfile.vue";
  import navItems from "@/navigation/horizontal";
  import NavBarI18n from "@core/components/I18n.vue";
  import { HorizontalNavLayout } from "@layouts";
  import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
  import { themeConfig } from "@themeConfig";
</script>

<template>
  <HorizontalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar>
      <NuxtLink to="/" class="app-logo d-flex align-center gap-x-3">
        <VNodeRenderer :nodes="themeConfig.app.logo" />

        <h1 class="app-title font-weight-bold text-capitalize text-xl leading-normal">
          {{ themeConfig.app.title }}
        </h1>
      </NuxtLink>
      <VSpacer />

      <NavBarI18n
        v-if="themeConfig.app.i18n.enable && themeConfig.app.i18n.langConfig?.length"
        :languages="themeConfig.app.i18n.langConfig"
      />

      <NavbarThemeSwitcher class="me-2" />
      <UserProfile />
    </template>

    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </HorizontalNavLayout>
</template>
