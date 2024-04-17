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
            },
            {
                heading: 'Living near happy friends has the greatest effect on your own happiness.',
                icon: LifehackerIcon,
            },
            {
                heading: 'Live closer to your friends.',
                icon: AtlanticIcon,
            },
            {
                heading: 'You’d be happier living closer to friends. Why don’t you.',
                icon: CultureStudyIcon,
            },
            {
                heading: 'Living close to friends matters.',
                icon: BloombergIcon,
            },
            {
                heading: 'Living near happy friends has the greatest effect on your own happiness.',
                icon: LifehackerIcon,
            }
        ]);
        const onSwiper = (swiper: SwiperType) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            slides,
            onSwiper,
            onSlideChange,
        };
    },
});
</script>

<template>
    <section class="slider-section">
        <div class="container">
            <h3 class="slider-section-title">That one simple trick for your health and happiness</h3>
            <swiper
                :slides-per-view="1.5"
                :space-between="15"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
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
                    },
                }"
            >
                <swiper-slide v-for="(slide, index) in slides" :key="index">
                    <SliderMainItem>
                        <template #heading v-if="slide.heading">{{ slide.heading }}</template>
                        <template #icon>
                            <component :is="{...slide.icon}" v-if="slide.icon" />
                        </template>
                    </SliderMainItem>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<style scoped>
.slider-section {
    background-color: #FFE91A;
    padding: 20px 0;
}
.slider-section-title {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--black);
    margin: 0 0 150px;
}

</style>
