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
        <img src="@/assets/img/hero.gif" alt="" class="video-wrap">
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: var(--ivory);
  position: relative;
  color: var(--black);
  overflow: hidden;
  transition: all 0.5s;
  padding: 37vw 0 60px;
}
.hero-wrap {
  display: grid;
  gap: 60px;
}
.hero-inner {
  margin: 0 auto;
}
.video-wrap {
  height: 100%;
  width: 100%;
  max-width: 345px;
  max-height: 345px;
  object-fit: cover;
  border-radius: 7px;
  margin: 0 auto;
}
.title {
  font-family: "ConsortRRBoldCondensed";
  font-size: 40px;
  line-height: 1;
  max-width: 560px;
  margin: 0 0 17px;
}
.subtitle {
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -0.9px;
  max-width: 530px;
  margin: 0 0 25px;
}
.btn {
  width: 100%;
  max-width: 345px;
}
@media (min-width: 768px) {
  .hero {
    padding: 30vw 0 122px;
  }
  .hero.logo-small {
    padding: 10vw 0 122px;
  }
  .hero-wrap {
    gap: 20px;
  }
  .title {
    font-size: 100px;
    margin: 50px 0 25px;
    line-height: 0.85;
  }
  .subtitle {
    font-size: 22px;
    margin: 0 0 40px;
  }
  .btn {
    width: auto;
    max-width: none;
  }
  .video-wrap {
    max-width: 559px;
    max-height: 559px;
  }
}
@media (min-width: 992px) {
  .hero {
    padding: 37vw 0 122px;
  }
  .hero.logo-small {
    padding: 12vw 0 122px;
  }
  .hero-wrap {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-inner {
    margin: 0;
  }
}
@media (min-width: 1440px) {
  .hero {
    padding: 587px 0 122px;
  }
  .hero.logo-small {
    padding: 200px 0 122px;
  }
}
</style>