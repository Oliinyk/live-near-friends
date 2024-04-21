<script setup lang="ts">
  import IconHowItWorksBg from './icons/IconHowItWorksBg.vue';
</script>

<template>
  <section class="how-it-works">
    <div class="container">
      <div class="how-it-works-wrap">
        <h1 class="title">How it works</h1>
        <div class="how-it-works-inner">
          <div class="text-holder">
            <span class="pin">1</span>
            <p>Pick the ideal <span class="bold">LOCATION</span>
            for your minihood.</p>
          </div>
          <div class="text-holder">
            <span class="pin">2</span>
            <p>Sell your friends 
            on the <span class="bold">VISION.</span></p>
          </div>
          <div class="text-holder">
            <span class="pin">3</span>
            <p>Identify <span class="bold">HOMES</span> for sale or rent that fit everyone’s needs.</p>
          </div>
          <div class="text-holder">
            <span class="pin">4</span>
            <p>Get hands-on assistance from 
            a <span class="bold">FREE</span> Live Near Friends Advisor.</p>
          </div>
          <div class="text-holder">
            <span class="pin">5</span>
            <p>Turn your friends
            into <span class="bold">NEIGHBORS.</span></p>
          </div>
          <IconHowItWorksBg class="how-it-works-bg"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works {
  text-align: center;
  padding: 116px 0 118px;
  overflow: hidden;
  position: relative;
}
.title {
  font-family: "Consort RR LightCondensed";
  font-size: 40px;
  line-height: 0.85;
  margin: 0 0 110px;
}
.how-it-works-inner {
  position: relative;
}
.how-it-works-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
}
.how-it-works-inner p {
  font-size: 20px;
  line-height: 1.2;
}
.text-holder {
  position: relative;
  z-index: 1;
  max-width: 235px;
  margin: 0 auto;
  text-wrap: balance;
  padding-top: 125px;
  padding-bottom: 63px;
}
.text-holder:nth-child(3) {
  max-width: 280px;
}
.text-holder:nth-child(4) {
  max-width: 305px;
}
.text-holder:nth-child(5) {
  padding-bottom: 0;
}
.bold {
  font-weight: 900;
}
.pin {
  position: absolute;
  right: calc(50% - 15px);
  top: 15px;
  background: var(--black);
  border-radius: 50%;
  color: var(--white);
  font-size: 20px;
  height: 30px;
  width: 30px;
}
@media (min-width: 768px) {
  .title {
    font-size: 100px;
    margin: 0 0 125px;
  }
}
</style>
