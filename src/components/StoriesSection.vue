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
                <p class="above-title">Case Study #001</p>
                <h3 class="item-title">3 friends raise kids together in Oakland</h3>
                <p class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet, diam nec dignissim consectetur, velit arcu scelerisque arcu, non facilisis mauris.</p>
                <a href="#" class="item-link">Read the full story</a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="item">
              <div class="img-holder">
                <img alt="slide-item" src="@/assets/img/slide-item-2.jpg" />
              </div>
              <div class="item-text-holder">
                <p class="above-title">Case Study #002</p>
                <h3 class="item-title">College friends reunite in Durham</h3>
                <p class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet, diam nec dignissim consectetur, velit arcu scelerisque arcu, non facilisis mauris.</p>
                <a href="#" class="item-link">Read the full story</a>
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
  font-family: "Consort RR LightCondensed";
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
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.5px;
  max-width: 530px;
  margin: 0 0 15px;
  color: var(--black);
}
.link {
  font-size: 12px;
  font-family: "Scto-Grotesk-A-Medium";
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--black);
}
.stories-slider .item {
  max-width: 440px;
  margin: 0 auto;
}
.img-holder img {
  border-radius: 7px;
}
.item-text-holder {
  margin: 5px 0 0;
}
.above-title {
  font-size: 6px;
  margin: 0 0 14px;
  color: var(--black);
}
.item-title {
  font-family: "Consort RR LightCondensed";
  font-size: 30px;
  line-height: 0.85;
  margin: 0 0 14px;
  color: var(--black);
}
.item-text {
  font-size: 10px;
  line-height: 1.25;
  margin: 0 0 5px;
  color: var(--black);
}
.item-link {
  font-size: 6px;
  font-family: "Scto-Grotesk-A-Medium";
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  color: var(--black);
}
@media (min-width: 768px) {
  .stories-section {
    padding: 115px 0 125px;
  }
  .title {
    font-size: 100px;
    margin: 0 0 43px;
  }
  .text-holder {
    max-width: 50%;
    margin: 0;
  }
  .item-text-holder {
    margin: 17px 0 0;
  }
  .subtitle {
    font-size: 20px;
  }
  .above-title {
    font-size: 12px;
    margin: 0 0 24px;
  }
  .item-title {
    font-size: 60px;
    margin: 0 0 25px;
  }
  .item-text {
    font-size: 20px;
    margin: 0 0 25px;
  }
  .item-link {
    font-size: 12px;
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
      padding-top: 117px;
    }
  }
</style>