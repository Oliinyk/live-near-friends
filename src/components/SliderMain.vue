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
                        spaceBetween: 30,
                    },
                }"
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
        </div>
    </section>
</template>

<style scoped>
.slider-section {
    background-color: #FFE91A;
    padding: 10px 0 15px;
}
.slider-section-title {
    font-size: 16px;
    line-height: 1.2;
    text-transform: uppercase;
    font-family:"Scto-Grotesk-A-Medium";
    font-weight: 700;
    color: var(--black);
    text-wrap: balance;
    margin: 0 0 96px;
    letter-spacing: -1px;
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
    background-color: #03C745;
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
.swiper-slide:nth-child(2n) .logo-item svg {
    max-height: 28px;
    max-width: 75px;
}
@media (min-width: 768px) {
    .slider-section { 
        padding: 25px 0 30px;
    }
    .slider-section-title {
        font-size: 20px;
        margin: 0 0 198px;
    }
    .swiper {
        margin: 0;
    }
    .logo-item svg {
        max-height: 45px;
        max-width: 131px;
    }
    .swiper-slide:nth-child(2n) .logo-item svg {
        max-height: 40px;
        max-width: 107px;
    }
}

</style>
