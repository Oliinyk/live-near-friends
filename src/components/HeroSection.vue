<script setup lang="ts">
  import IconHeroBg from './icons/IconHeroBg.vue';
  // import IconPin from './icons/IconPin.vue';
  // import IconPin1 from './icons/IconPin1.vue';
  // import IconPin2 from './icons/IconPin2.vue';
</script>

<template>
  <section class="hero">
    <IconHeroBg class="hero-bg"/>
    <div class="container">
      <div class="hero-wrap">
        <div class="hero-inner">
          <h1 class="title">Buy and rent homes near friends and family</h1>
          <p class="subtitle">We make it simple and fun for you and your friends to become real estate conspirators. Start your own minihood today.</p>
          <a href="#" class="btn">GET STARTED</a>
        </div>
        <div class="pin-wrap">
          <!-- <IconPin class="pin" />
          <IconPin1 class="pin" />
          <IconPin2 class="pin" /> -->
          <img alt="" src="@/assets/img/pin-wrap.svg" />
        </div>
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
  display: flex;
  flex-direction: column;
}
.hero-inner {
  position: relative;
  z-index: 1;
  order: 2;
}
.title {
  font-family: "Consort RR LightCondensed";
  font-size: 40px;
  line-height: 0.85;
  max-width: 800px;
  margin: 0 0 20px;
}
.subtitle {
  font-size: 16px;
  line-height: 1.2;
  max-width: 550px;
  margin: 0 0 25px;
}
.hero-bg {
  position: absolute;
  right: 0;
  width: 175%;
  bottom: 15%;
}
.btn {
  display: inline-block;
  background-color: var(--green);
  font-family: "Scto-Grotesk-A-Medium";
  font-weight: 700;
  font-size: 12px;
  padding: 8px 11px;
}
.btn:hover {
  background-color: var(--yellow);
  color: var(--black);
}
.pin-wrap {
  width: 100%;
  max-width: 225px;
  order: 1;
  margin: 0 0 40px auto;
}
.pin-wrap img {
  position: relative;
  max-width: 100%;
  height: auto;
}
/* .pin {
  position: absolute;
  left: -40px;
  top: 0;
}
.pin:nth-child(2n) {
  right: 0;
  left: auto;
  top: 75px;
}
.pin:nth-child(3n) {
  left: calc(50% - 103px);
  top: auto;
  bottom: 7px;
} */

@media (min-width: 768px) {
  .hero-bg {
    top: -30%;
    width: 175%;
  }
  .title {
    font-size: 100px;
    margin: 0 0 32px;
  }
  .subtitle {
    font-size: 20px;
    margin: 0 0 45px;
  }
  .pin-wrap {
    max-width: 440px;
  }
  .btn {
    padding: 14px 17px;
  }
}
@media (min-width: 992px) {
  .hero {
    padding: 168px 0 75px;
  }
  .hero-bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .hero-wrap {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
  .pin-wrap {
    order: 2;
    margin: 60px 0 0;
  }
  .hero-inner {
    order: 1;
  }
}
</style>
