<!-- eslint-disable import/extensions -->
<!-- eslint-disable import/no-unresolved -->
<script setup>
import ScrollToTop from "@core/components/ScrollToTop.vue"
import initCore from "@core/initCore"
import { initConfigStore, useConfigStore } from "@core/stores/config"
import { hexToRgb } from "@layouts/utils"
import { useTheme } from "vuetify"
import CustomNotif from '~/components/Notifications/CustomNotif'
import ChicMsg from '~/components/Notifications/ChicMsg'
import { markRaw } from 'vue'
import MySuccessIcon from '~/components/notifs/MySuccessIcon'
import MyPromiseIcon from '~/components/notifs/MyPromiseIcon'
import MyErrorIcon from '~/components/notifs/MyErrorIcon'
import MyCloseIcon from '~/components/notifs/MyCloseIcon'

const { global } = useTheme()

// ℹ️ Sync current theme with initial loader theme
initCore()
initConfigStore()

const configStore = useConfigStore()
const { isMobile } = useDevice()
if (isMobile) configStore.appContentLayoutNav = "vertical"

const myIcons = {
  success: markRaw(MySuccessIcon),
  error: '⛔️',
  promise: markRaw(MyPromiseIcon),
  close: null, // Do not render close button

  // close: markRaw(MyCloseIcon), // Do not render close button
  // error: markRaw(MyErrorIcon),
  // resolve: markRaw(MyErrorIcon),
  // success: markRaw(MySuccessIcon),
}
</script>

<template>
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <NuxtLayout>
        <NuxtPage />
        
        <Notivue v-slot="item">
          <NotivueSwipe :item="item">
            <!-- :icons="outlinedIcons" -->
            <Notification
              :item="item"
              :theme="materialTheme"
              :icons="outlinedIcons"
            >
              <NotificationProgress :item="item" />
            </Notification>
          </NotivueSwipe>
        </Notivue> 
       
        <!--
          <Notivue v-slot="item">
          <ChicMsg :item="item" />
          </Notivue> 
        -->
      </NuxtLayout>
      <ScrollToTop />
    </VApp>
  </VLocaleProvider>
</template>

<style scoped>
.pop-in {
  animation: pop-in-kf 200ms ease-in-out;
}

.pop-out {
  animation: pop-out-kf 300ms ease-out;
}

.fade {
  animation: fade-kf 1s ease-in-out;
}

@keyframes pop-in-kf {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pop-out-kf {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }

  100% {
    transform: scale(1.05);
    opacity: 0;
  }
}

@keyframes fade-kf {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
