<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/main/AppHeader.vue'
import AppFooter from './components/main/AppFooter.vue'
</script>

<template>
  <app-header />

  <RouterView />

  <app-footer />
</template>