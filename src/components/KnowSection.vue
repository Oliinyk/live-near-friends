<script setup lang="ts">
  import IconArrow from './icons/IconArrow.vue';
</script>

<template>
  <section class="know-section">
    <div class="container">
      <h2 class="title">DID YOU KNOW</h2>
      <div class="text-holder">
        <span class="arrow-wrap arrow-left">
          <IconArrow class="arrow" />
        </span>
        <p>A happy friend who lives within a mile increases the probability that you are happy by 25%. Within half a mile, this number is over 40%!</p>
        <span class="arrow-wrap arrow-right">
          <IconArrow class="arrow" />
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.know-section {
  padding: 112px 0 112px;
  text-align: center;
}
.title {
  font-size: 16px;
  font-family: "Scto-Grotesk-A-Medium";
  font-weight: 700;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin: 0 0 20px;
}
.text-holder {
  position: relative;
}
.text-holder p {
  font-family: "Consort RR LightCondensed";
  font-size: 30px;
  line-height: 1;
  max-width: 900px;
  margin-left: 60px;
  margin-right: 60px;
}
.arrow-wrap {
  position: absolute;
  top: 33%;
  display: flex;
}
.arrow-left {
  left: 0;
}
.arrow-right {
  right: 0;
  transform: rotate(180deg);
}
.arrow-wrap::after {
  content: '';
  background-color: var(--black);
  position: absolute;
  top: calc(50% - 1px);
  left: 2px;
  height: 1px;
  width: 45px;
}
@media (min-width: 768px) {
  .know-section {
    padding: 233px 0 227px;
  }
  .title {
    font-size: 20px;
    margin: 0 0 12px;
  }
  .text-holder p {
    font-size: 60px;
    margin-left: 130px;
    margin-right: 130px;
  }
  .arrow-wrap::after {
    width: 120px;
  }
}
@media (min-width: 992px) {
  .text-holder p {
    margin-left: 210px;
    margin-right: 210px;
  }
  .arrow-wrap::after {
    width: 205px;
  }
}
</style>