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
    const onSlideChange = () => {
      console.log('slide change');
    };
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
      <h2 class="title">LNF Success Stories</h2>
      <div class="text-holder">
        <p class="subtitle">Learn how others have already done it. Lorem ipsum dolor
        amet, consectetur adipiscing elit. Proin laoreet, diam nec dignissim consectetur, velit arcu scelerisque arcu.</p>
        <a href="#" class="link">READ MORE STORIES ON OUR BLOG</a>
      </div>

      <div class="stories-slider">
        <swiper
          :slides-per-view="2"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="item">
              <div class="img-holder">
                <img alt="slide-item" src="@/assets/img/slide-item-1.jpg" />
              </div>
              <div class="item-text-holder">
                <p>Case Study #001</p>
                <h3>3 friends raise kids together in Oakland</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet, diam nec dignissim consectetur, velit arcu scelerisque arcu, non facilisis mauris.</p>
                <a href="#" class="link">Read the full story</a>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="item">
              <div class="img-holder">
                <img alt="slide-item" src="@/assets/img/slide-item-2.jpg" />
              </div>
              <div class="item-text-holder">
                <p>Case Study #002</p>
                <h3>College friends reunite in Durham</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet, diam nec dignissim consectetur, velit arcu scelerisque arcu, non facilisis mauris.</p>
                <a href="#" class="link">Read the full story</a>
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
  padding: 115px 0 60px;
}
.title {
  font-family: "Consort RR LightCondensed";
  font-size: 40px;
  line-height: 0.85;
  margin: 0 0 20px;
}
.subtitle {
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.5px;
  max-width: 530px;
  margin: 0 0 15px;
}
.link {
  font-size: 12px;
  font-family: "Scto-Grotesk-A-Medium";
  font-weight: 700;
  letter-spacing: -0.5px;
}
.stories-slider .item {
  max-width: 440px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .title {
    font-size: 100px;
    margin: 0 0 43px;
  }
  .subtitle {
    font-size: 20px;
  }
}
</style>