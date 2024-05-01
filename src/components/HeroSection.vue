<script setup lang="ts">
import { ref } from 'vue';

const isLogoSmall = ref(false);

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > 0) {
    isLogoSmall.value = true;
  } else {
    isLogoSmall.value = false;
  }
});
</script>

<template>
  <section class="hero" :class="{'logo-small': isLogoSmall}">
    <div class="container">
      <div class="hero-wrap">
        <div class="hero-inner">
          <h1 class="title">Buy and rent homes near friends & family</h1>
          <p class="subtitle">We make it simple and fun for you and your friends to become real estate conspirators. Start your own mini neighborhood today.</p>
          <a href="#" class="btn btn-large">Explore what’s possible</a>
        </div>
        <video autoplay loop muted class="video-wrap">
          <source src="@/assets/img/hero.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: var(--ivory);
  padding: 30px 0 50px;
  position: relative;
  color: var(--black);
  overflow: hidden;
}
.hero-wrap {
  display: grid;
  gap: 20px;
}
.hero-inner {
  margin: 0 auto;
}
.video-wrap {
  height: 100%;
  width: 100%;
  max-width: 559px;
  max-height: 559px;
  object-fit: cover;
  border-radius: 7px;
  margin: 0 auto;
}
.title {
  font-family: "ConsortRRBoldCondensed";
  font-size: 40px;
  line-height: 0.85;
  max-width: 560px;
  margin: 0 0 20px;
}
.subtitle {
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -0.9px;
  max-width: 530px;
  margin: 0 0 25px;
}
@media (min-width: 768px) {
  .title {
    font-size: 100px;
    margin: 50px 0 25px;
  }
  .subtitle {
    font-size: 22px;
    margin: 0 0 40px;
  }
}
@media (min-width: 992px) {
  .hero {
    padding: 594px 0 122px;
    transition: all 0.5s;
  }
  .hero.logo-small {
    padding: 207px 0 122px;
  }
  .hero-wrap {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-inner {
    margin: 0;
  }
}
</style>