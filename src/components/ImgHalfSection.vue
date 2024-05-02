<template>
  <section class="img-half-section">
    <div class="img-col">
      <img alt="img-half" src="@/assets/img/img-1.jpg" />
    </div>
    <div class="app-col">
      <img alt="img-half" src="@/assets/img/phone-app.png" />
    </div>
  </section>
</template>

<style scoped>
.img-half-section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
}
.img-col,
.app-col {
  width: 100%;
}
.img-col {
  order: 2;
}
.app-col {
  order: 1;
}
.img-col img {
  display: block;
  object-fit: cover;
  height: 470px;
  width: 100%;
}
.app-col {
  background-color: var(--primary-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 50px;
  height: 470px;
}
.app-col img {
  max-height: 100%;
}
@media (min-width: 768px) {
  .img-half-section {
    flex-direction: row;
  }
  .img-col,
  .app-col {
    width: 50%;
  }
  .img-col {
    order: 1;
  }
  .app-col {
    order: 2;
  }
  .app-col {
    height: inherit;
  }
  .img-col img {
    height: 100%;
  }
}
@media (min-width: 992px) {
  .img-col img {
    height: 900px;
  }
}
</style>