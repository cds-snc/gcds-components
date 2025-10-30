<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <gcds-header></gcds-header>
  <gcds-container size="xl" centered main-container class="mb-400">
    <RouterView />
  </gcds-container>
  <gcds-footer></gcds-footer>
</template>

<style scoped></style>
