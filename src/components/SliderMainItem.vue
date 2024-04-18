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
  min-height: 288px;
  padding: 10px 15px;
}
.item-title {
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.7px;
  color: var(--black);
}
.logo-item {
  display: flex;
}
.logo-item svg {
  max-height: 30px;
}
@media (min-width: 768px) {
  .item {
    padding: 13px 20px;
    min-height: 412px;
  }
  .item-title {
    font-size: 30px;
  }
  .logo-item svg {
    max-height: 45px;
  }
}
</style>
