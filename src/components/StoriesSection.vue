<template>
  <section class="stories-section">
    <div class="container">
      <h2 class="title">Success stories</h2>
      <div class="text-holder">
        <p class="subtitle">Dive into the daily lives of folks who moved near their friends in our latest collection of case studies. Learn how they chose their homes and neighborhoods, and hear their stories of spontaneity and support.</p>
        <a href="#" class="link">Read more on our blog</a>
      </div>
      <div class="stories-wrapper">
        <div class="item-wrap">
          <div class="item">
            <div class="img-holder">
              <img alt="slide-item" src="@/assets/img/slide-item-1.jpg" />
            </div>
            <div class="item-text-holder">
              <h3 class="item-title">New parents in Oakland, CA</h3>
              <p class="item-text">Carmen & Osman and Deena moved into their respective homes in an existing minihood. They’re parenting their one-year-olds around lots of other toddler-parents.</p>
              <a href="#" class="item-link link">Read the full story</a>
            </div>
          </div>
        </div>
        <div class="item-wrap">
          <div class="item">
            <div class="img-holder">
              <img alt="slide-item" src="@/assets/img/slide-item-2.jpg" />
            </div>
            <div class="item-text-holder">
              <h3 class="item-title">College friends reunited in Durham, NC</h3>
              <p class="item-text">Reed & Eric took a pandemic leap of faith to live near Lauren & Mollie. Over the years, their families have gotten incredibly close, and bagel breakfasts are a weekend ritual.</p>
              <a href="#" class="item-link link">Read the full story</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stories-section {
  background-color: var(--ivory);
  padding: 58px 0 49px;
}
.title {
  font-family: "ConsortRRBoldCondensed";
  font-size: 40px;
  line-height: 0.85;
  margin: 0 0 20px;
  color: var(--black);
  position: relative;
  z-index: 2;
}
.text-holder {
  margin: 0 0 52px;
  position: relative;
  z-index: 2;
}
.subtitle {
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -0.9px;
  max-width: 530px;
  margin: 0 0 15px;
  color: var(--black);
}
.stories-wrapper {
  display: flex;
  display: grid;
  gap: 3rem;
}
.stories-wrapper .item {
  max-width: 488px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.item-wrap {
  position: relative;
}
.img-holder img {
  border-radius: 10px;
}
.item-text-holder {
  margin: 20px 0 5px;
}
.item-title {
  font-family: "ConsortRRBoldCondensed";
  font-size: 40px;
  line-height: 1;
  margin: 0 0 17px;
  color: var(--black);
}
.item-text {
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -.9px;
  margin: 0 0 15px;
  color: var(--black);
}
.stories-section .container {
  height: 100%;
}
@media (min-width: 768px) {
  .stories-section {
    padding: 130px 0 108px;
  }
  .title {
    font-size: 100px;
    margin: 0 0 25px;
  }
  .stories-wrapper {
    margin: -105px 0 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .item {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .img-holder {
    display: flex;
    align-items: flex-end;
    height: 100%;
    max-height: 661px;
  }
  .text-holder {
    max-width: 50%;
    margin: 0;
  }
  .item-text-holder {
    margin: 28px 0 5px;
  }
  .subtitle {
    font-size: 22px;
    margin: 0 0 32px;
  }
  .stories-wrapper .item {
    padding: 0 24px;
  }
  .item-title {
    font-size: 60px;
  }
  .item-text {
    font-size: 22px;
    margin: 0 0 18px;
  }
  .stories-wrapper .item-wrap:after {
    content: '';
    background-image: url('../assets/img/mask-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -125px;
    left: 0px;
    max-height: 375px;
    height: 100%;
    width: 100%;
    z-index: 0;
    transition: opacity 0.5s;
    opacity: 0;
  }
  .stories-wrapper .item-wrap:nth-child(1):after {
    top: 110px;
  }
  .stories-wrapper .item-wrap:hover:after {
    opacity: 1;
  }
}
@media (min-width: 1024px) {
.item-title {
    margin: 0 -48px 25px 0;
  }
}
@media (min-width: 1200px) {
  .stories-wrapper .item-wrap:after {
    max-height: 675px;
  }
}
</style>