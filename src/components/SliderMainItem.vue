<template>
  <div class="item">
    
    <h4 class="item-title">
      <slot name="heading"></slot>
    </h4>

    <i class="logo-item">
      <slot name="icon"></slot>
    </i>
  </div>
</template>

<style scoped>
.item {
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 412px;
}
.item-title {
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
  color: var(--black);
}
.logo-item {
  display: flex;
}
@media (min-width: 1024px) {
  .item {
    padding: 1rem;
  }
  .item-title {
    font-size: 30px;
  }
}
</style>
