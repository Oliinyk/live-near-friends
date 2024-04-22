<script setup lang="ts">
  import IconPentagonOrange from './icons/IconPentagonOrange.vue';
  import IconTrees from './icons/IconTrees.vue';
  import IconPentagonViolet from './icons/IconPentagonViolet.vue';
  import IconStar from './icons/IconStar.vue';
  import IconHeart from './icons/IconHeart.vue';
</script>

<template>
  <section class="icon-section">
    <IconPentagonOrange />
    <IconTrees />
    <IconPentagonViolet />
    <IconStar />
    <IconHeart />
  </section>
</template>

<style scoped>
.icon-section {
  display: flex;
}
</style>