<script setup>
const themes = [
  {
    name: "light",
    icon: "tabler-sun-high",
    label: "Jour",
  },
  {
    name: "dark",
    icon: "tabler-moon-stars",
    label: "Nuit",
  },
  {
    name: "system",
    icon: "tabler-device-desktop-analytics",
    label: "Système",
  },
]
</script>

<template>
  <ThemeSwitcher :themes="themes" />
</template>
