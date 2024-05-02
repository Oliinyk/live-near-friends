<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: SwiperType) => {  
      console.log(swiper);
    };
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<template>
  <section class="stories-section">
    <div class="container">
      <h2 class="title">Success stories</h2>
      <div class="text-holder">
        <p class="subtitle">Dive into the daily lives of folks who moved near their friends in our latest collection of case studies. Learn how they chose their homes and neighborhoods, and hear their stories of spontaneity and support.</p>
        <a href="#" class="link">Read more on our blog</a>
      </div>
      <div class="stories-slider">
        <swiper
          class="stories-slider-wrapper"
          :slides-per-view="1.5"
          :space-between="30"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :breakpoints="{
            '768': {
              slidesPerView: 2,
            },
            '1200': {
              slidesPerView: 2,
            },
          }"
        >
          <swiper-slide>
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
          </swiper-slide>
          <swiper-slide>
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
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stories-section {
  background-color: var(--ivory);
  padding: 58px 0 54px;
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
  margin: 0 0 25px;
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
.stories-slider .item {
  max-width: 488px;
  padding: 0 24px;
  margin: 0 auto;
}
.img-holder img {
  border-radius: 7px;
}
.item-text-holder {
  margin: 5px 0;
}
.item-title {
  font-family: "ConsortRRBoldCondensed";
  font-size: 30px;
  line-height: 1;
  margin: 0 0 14px;
  color: var(--black);
}
.item-text {
  font-size: 10px;
  line-height: 1.3;
  letter-spacing: -.9px;
  margin: 0 0 5px;
  color: var(--black);
}
@media (min-width: 768px) {
  .stories-section {
    padding: 130px 0 108px;
  }
  .title {
    font-size: 100px;
    margin: 0 0 25px;
  }
  .text-holder {
    max-width: 50%;
    margin: 0;
  }
  .item-text-holder {
    margin: 22px 0 5px;
  }
  .subtitle {
    font-size: 22px;
    margin: 0 0 32px;
  }
  .item-title {
    font-size: 60px;
    margin: 0 -48px 25px 0;
  }
  .item-text {
    font-size: 22px;
    margin: 0 0 18px;
  }
  .stories-slider {
    margin: -225px 0 0;
  }
  .stories-slider .swiper-slide:nth-child(1) {
    padding-top: 24%;
  }
  .stories-slider .item:after {
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
    z-index: -1;
    transition: opacity 0.5s;
    opacity: 0;
  }
  .stories-slider .swiper-slide:nth-child(1) .item:after {
    top: 110px;
  }
  .stories-slider .item:hover:after {
    opacity: 1;
  }
}
@media (min-width: 992px) {
  .stories-slider .swiper-slide:nth-child(1) {
    padding-top: 230px;
  }
}
@media (min-width: 1200px) {
  .stories-slider .item:after {
    max-height: 675px;
  }
}
</style>

<style>
  .stories-slider-wrapper .swiper-wrapper {
    align-items: flex-end;
  }
  @media (min-width: 768px) {
    .stories-slider-wrapper .swiper-wrapper {
      padding-top: 112px;
    }
  }
</style>