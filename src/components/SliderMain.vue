<script lang="ts">
import { defineComponent, ref } from 'vue';
import SliderMainItem from './SliderMainItem.vue';
import BloombergIcon from './icons/IconBloomberg.vue';
import LifehackerIcon from './icons/IconLifehacker.vue';
import AtlanticIcon from './icons/IconAtlantic.vue';
import CultureStudyIcon from './icons/IconCultureStudy.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default defineComponent({
    name: 'SliderMain',
    components: {
        Swiper,
        SwiperSlide,
        SliderMainItem,
        BloombergIcon,
        LifehackerIcon,
        AtlanticIcon,
        CultureStudyIcon,
    },
    setup() {
        const slides = ref([
            {
                heading: 'Living close to friends matters.',
                icon: BloombergIcon,
                color: 'green',
            },
            {
                heading: 'Living near happy friends has the greatest effect on your own happiness.',
                icon: LifehackerIcon,
                color: 'orange',
            },
            {
                heading: 'Live closer to your friends.',
                icon: AtlanticIcon,
                color: 'lilac',
            },
            {
                heading: 'You’d be happier living closer to friends. Why don’t you.',
                icon: CultureStudyIcon,
                color: 'red',
            },
            {
                heading: 'Living close to friends matters.',
                icon: BloombergIcon,
                color: 'green',
            },
            {
                heading: 'Living near happy friends has the greatest effect on your own happiness.',
                icon: LifehackerIcon,
                color: 'orange',
            },
            {
                heading: 'Live closer to your friends.',
                icon: AtlanticIcon,
                color: 'lilac',
            },
            {
                heading: 'You’d be happier living closer to friends. Why don’t you.',
                icon: CultureStudyIcon,
                color: 'red',
            },
        ]);
        const onSwiper = (swiper: SwiperType) => {
            console.log(swiper);
        };
        const onSlideChange = () => {};
        return {
            slides,
            onSwiper,
            onSlideChange,
            modules: [Autoplay],
        };
    },
});
</script>

<template>
    <section class="slider-section">
        <h2 class="slider-section-title">THE simple trick for your health and happiness</h2>
        <swiper
            :slides-per-view="1.5"
            :space-between="15"
            :loop="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :speed="5000"
            :autoplay="{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }"
            :breakpoints="{
                '640': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '768': {
                    slidesPerView: 3,
                },
                '1200': {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                '1800': {
                    slidesPerView: 6,
                },
            }"
            :modules="modules"
            class="brand-slider"
        >
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <SliderMainItem :class="slide.color">
                    <template #heading v-if="slide.heading">{{ slide.heading }}</template>
                    <template #icon>
                        <component :is="{...slide.icon}" v-if="slide.icon" />
                    </template>
                </SliderMainItem>
            </swiper-slide>
        </swiper>
    </section>
</template>

<style scoped>
.slider-section {
    background-color: var(--yellow);
    padding: 10px 0 15px;
    overflow: hidden;
}
.slider-section-title {
    font-size: 18px;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Plain-Bold';
    color: var(--black);
    text-wrap: balance;
    margin: 0 0 96px;
    letter-spacing: -.9px;
}
.swiper {
    margin-right: -15px;
}
.item {
    transition: background-color 0.25s;
}
.item:hover.orange {
    background-color: #FFB042;
}
.item:hover.green {
    background-color: var(--green);
}
.item:hover.lilac {
    background-color: #E1BAFF;
}
.item:hover.red {
    background-color: #FC4F24;
}
.logo-item svg {
  max-height: 25px;
  max-width: 92px;
}
@media (min-width: 768px) {
    .slider-section { 
        padding: 55px 0 65px;
    }
    .slider-section-title {
        font-size: 22px;
        margin: 0 0 115px;
    }
    .swiper {
        margin: 0;
    }
    .logo-item svg {
        max-height: 45px;
        max-width: 131px;
    }
}
</style>

<style>
.brand-slider .swiper-wrapper {
    -webkit-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
    padding: 0 15px;
}
</style>
