<template>
  <section class="img-section">
    <div class="img-wrap"></div>
  </section>
</template>

<style scoped>
.img-wrap {
  background-color: var(--ivory);
  background-image: url('../assets/img/img-bg.png');
  background-position: 50% 100%;
  height: 265px;
  background-size: contain;
  background-repeat: repeat-x;
}
@media (min-width: 768px) {
  .img-wrap {
    height: 700px;
  }
}
</style>