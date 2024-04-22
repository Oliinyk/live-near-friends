<template>
  <section class="how-it-works">
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
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works {
  background-color: var(--ivory);
  text-align: center;
  padding: 58px 0;
  overflow: hidden;
  position: relative;
}
.title {
  font-family: "Consort RR LightCondensed";
  font-size: 40px;
  line-height: 0.85;
  margin: 0 0 58px;
  color: var(--black);
}
.how-it-works-inner {
  position: relative;
}
.how-it-works-inner {
  background-image: url('../assets/img/IconHowItWorksMobBg.svg');
  background-repeat: no-repeat;
  background-position: center 15px;
}
.how-it-works-inner p {
  font-size: 16px;
  line-height: 1.2;
  text-wrap: balance;
  max-width: 320px;
  color: var(--black);
}
.text-holder {
  position: relative;
  z-index: 1;
  max-width: 235px;
  margin: 0 auto;
  text-wrap: balance;
  padding-top: 97px;
  padding-bottom: 35px;
}
.text-holder:nth-child(2) {
  max-width: 190px;
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
  .how-it-works {
    padding: 116px 0 118px;
  }
  .title {
    font-size: 100px;
    margin: 0 0 125px;
  }
  .how-it-works-inner p {
    font-size: 20px;
  }
  .text-holder {
    padding-top: 125px;
    padding-bottom: 63px;
  }
  .text-holder:nth-child(2) {
    max-width: 235px;
  }
  .text-holder:nth-child(3) {
    max-width: 280px;
  }
  .text-holder:nth-child(4) {
    max-width: 305px;
  }
  .how-it-works-inner {
    background-image: url('../assets/img/IconHowItWorksBg.svg');
    background-position: center 0;
  }
}
</style>