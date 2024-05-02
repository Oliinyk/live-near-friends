<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default defineComponent({
  name: 'SliderKnow',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = ref([
      {
        heading: 'DID YOU KNOW?',
        textholder: '“Living within 1 mile of a friend can increase your happiness by 25%. Within 1/2 mile, this number is over 40%”',
        description : 'Harvard Study',
      },
      {
        heading: 'DID YOU KNOW?',
        textholder: 'A happy friend who lives within a mile increases the probability that you are happy by 25%. Within half a mile, this number is over 40%!',
        description: 'Harvard Study',
      }
    ]);
    const onSwiper = (swiper: SwiperType) => {
      console.log(swiper);
    };
    const onSlideChange = () => {};
    return {
      slides,
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Navigation]
    };
  },
});
</script>

<template>
  <section class="know-section">
    <div class="container">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        navigation
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :speed="1000"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <h2 class="title" v-if="slide.heading">{{ slide.heading }}</h2>
          <p class="text-holder" v-if="slide.textholder">{{ slide.textholder }}</p>
          <p class="description" v-if="slide.description">{{ slide.description }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
.know-section {
  background-color: var(--ivory);
  padding: 112px 0 50px;
  text-align: center;
}
.title {
  font-size: 16px;
  font-family: 'Plain-Bold';
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin: 0 0 20px;
  color: var(--black);
}
.text-holder {
  font-family: "ConsortRRBoldCondensed";
  font-size: 30px;
  line-height: 1;
  max-width: 900px;
  margin: 0 auto 52px;
  color: var(--black);
}
.description {
  font-size: 18px;
  color: var(--black)
}

@media (min-width: 768px) {
  .title {
    font-size: 22px;
    margin: 0 0 48px;
  }
  .text-holder {
    font-size: 60px;
  }
  .description {
    font-size: 22px;
  }
}
</style>

<style>
.know-section .swiper-button-prev {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAAeCAYAAABkISHrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAELSURBVHgB7dxRTQNBFAXQCwqQMBJwwDqgDpBAHVAHWMABOCgOkFAJxQHsZNqEDyAz2889J3mZNXCzuy83k1zmbZ7bAN1u5vk6nbAq11luk/bG+QzQ7WOe+wDdpnkOAYbU0DwE6Lab5zVAtzLP8XQCHUraJ9omQJeSFpqnAF1KhAaGbGODBt2mefanKQH+NaWFpW7OHgP86iqtpPmcti2rz7V79hIdNPhTLXmeA/LzFBoYcJfWCrAQgAVKWvv5EMsBGHZeR28DDClp4dkFGFIiPLBIiZInLFJvtLEwgAXqomAfYFgNzhRgyBSXdcAi3jqwQG1P+9eBQbVJfYwrcFmhS67ArQ3q9wgOK/QNC1su4cWhrssAAAAASUVORK5CYII=') !important;
}
.know-section .swiper-button-next {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAAeCAYAAABkISHrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgB7duxbQJBEIXhZztxSAlbgjswoUM68LkCuwPowmXYHQAZRJQAHUBIBjOak0AInXaO8P5Petrg4tGudt9JwPAUy58ApIws+3bt5UXA8BwtH5ZXy1oAqo0tcwFI2yoGCEDCWD13nWcBw7Vo1x8BSCmKI9ubAKRMFMNTBCBlKoYH6KV6eHgABS6WlifLb7uuBKBaUew8G3F0A9IaxQB5IXRy/cG3o6kAdGkUO89O8fbzxQMo0G2kS4v6dgVwhzcK/PcDr+W8C0CnohgWBgao1CguBL4FoMpMtAeAlJkYGiCFkieQVBQ3Z0UAqvnNGSUAIKFRHNEAJPjQ8E4DJPiFwEYAUrzx/CkA1bykedIDZU3a0RiiYvm3HNTTGeRlK11KASV5AAAAAElFTkSuQmCC') !important;
}
.know-section .swiper-button-next,
.know-section .swiper-button-prev {
  width: 105px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.know-section .swiper-button-next::after,
.know-section .swiper-button-prev::after {
  display: none;
}
@media (min-width: 768px) {
  .know-section .swiper-button-next,
  .know-section .swiper-button-prev {
    width: 120px
  }
}
@media (min-width: 992px) {
  .know-section .swiper-button-next,
  .know-section .swiper-button-prev {
    width: 205px
  }
}
</style>