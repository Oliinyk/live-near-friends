<script setup lang="ts">
  import IconPentagonViolet from './icons/IconPentagonViolet.vue';
  import IconTrees from './icons/IconTrees.vue';
  import IconPentagonGreen from './icons/IconPentagonGreen.vue';
  import IconStar from './icons/IconStar.vue';
  import IconHeart from './icons/IconHeart.vue';
</script>

<template>
  <section class="icon-section">
    <IconPentagonViolet />
    <IconTrees />
    <IconPentagonGreen />
    <IconStar />
    <IconHeart />
  </section>
</template>

<style scoped>
.icon-section {
  background-color: var(--ivory);
  display: flex;
  padding: 0 0 120px;
}
</style>