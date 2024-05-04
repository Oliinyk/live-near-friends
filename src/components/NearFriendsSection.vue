<script lang="ts">
import { ref } from 'vue';
import IconApartmentCluster from '../components/icons/IconApartmentCluster.vue'
import IconMinihood from '../components/icons/IconMinihood.vue'
import IconBackyardOasis from '../components/icons/IconBackyardOasis.vue'

export default {
  name: 'LetsStartedSection',
  setup() {
    const items = ref([
      {
        imgSrc: IconApartmentCluster,
        title: 'Apartment Cluster',
        subtitle: 'Rent a handful of apartments in the same building.',
        buttonHref: '#',
        buttonText: 'Get notified (coming soon!)',
        isActive: false
      },
      {
        imgSrc: IconMinihood,
        title: 'Minihood',
        subtitle: 'Carve out a corner in a neighborhood with your friends.',
        buttonHref: '#',
        buttonText: 'GET STARTED',
        isActive: true
      },
      {
        imgSrc: IconBackyardOasis,
        title: 'Backyard Oasis',
        subtitle: 'Your own private homes with a shared backyard.',
        buttonHref: '#',
        buttonText: 'Get notified (coming soon!)',
        isActive: false
      }
    ]);
    return {
      items,
    };
  },
}
</script>

<template>
  <section class="near-friends-section" id="nearFriendsSection">
    <div class="container">
      <h2 class="title">Ways to live near friends</h2>
      <p class="subtitle">Pick one to get started.</p>
      <div class="lets-started-items">
        <div v-for="(item, index) in items" :key="index" class="lets-started-item" :class="{ active: item.isActive }">
          <div class="img-holder">
            <component :is="item.imgSrc" />
          </div>
          <div class="text-holder">
            <h3 class="item-title">{{ item.title }}</h3>
            <p class="item-subtitle">{{ item.subtitle }}</p>
            <a :href="item.buttonHref" class="btn">{{ item.buttonText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.near-friends-section {
  text-align: center;
  background-color: var(--violet);
  padding: 58px 0 30px;
  color: var(--black);
}
.title {
  font-family: "ConsortRRBoldCondensed";
  font-size: 40px;
  line-height: 0.85;
  margin: 0 0 20px;
}
.subtitle {
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -1px;
  margin: 0 0 25px;
  text-wrap: balance;
}
.lets-started-items {
  display: grid;
  gap: 1.87rem;
}
.lets-started-item {
  background-color: var(--ivory);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;  
}
.img-holder {
  width: 100%;
  max-height: 351px;
  flex: 1;
}
.lets-started-item svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.lets-started-item.active {
  order: 1;
}
.lets-started-item:first-child {
  order: 2;
}
.lets-started-item:nth-child(3n) {
  order: 3;
}
.text-holder {
  padding: 40px 0 25px;
}
.item-title {
  font-family: "ConsortRRBoldCondensed";
  font-size: 40px;
  line-height: 0.85;
  margin: 0 0 20px;
}
.item-subtitle {
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -0.75px;
  max-width: 305px;
  margin: 0 auto 25px;
  text-wrap: balance;
}

@media (min-width: 768px) {
  .near-friends-section {
    padding: 115px 0 61px;
  }
  .img-holder {
    max-height: 407px;
  }
  .title {
    font-size: 100px;
    margin: 0 0 43px;
  }
  .subtitle {
    font-size: 22px;
    margin: 0 0 120px;
  }
  .lets-started-items {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .lets-started-item {
    max-width: 100%;
  }
  .lets-started-item.active {
    transform: scale(1.1);
    transform-origin: bottom center;
    order: 2;
  }
  .lets-started-item:first-child {
    order: 1;
  }
  .lets-started-item:nth-child(3n) {
    order: 3;
  }
  .text-holder {
    padding: 40px 0 38px;
  }
  .item-subtitle {
    font-size: 20px;
    margin: 0 auto 20px;
  }
  .btn {
    font-size: 13px;
  }
}
@media (min-width: 1440px) {
  .lets-started-items {
    gap: 5.5rem;
  }
  .item-title {
    font-size: 55px;
    margin: 0 0 27px;
  }
}
</style>

<style>
.lets-started-item:nth-child(1) .card-img .highlight {
  fill: var( --primary-blue);
}
.lets-started-item:nth-child(2) .card-img .highlight {
  fill: var( --orange);
}
.lets-started-item:nth-child(3) .card-img .highlight {
  fill: var( --pink);
}
@media (min-width: 768px) {
  .lets-started-item:nth-child(1) .card-img .highlight,
  .lets-started-item:nth-child(2) .card-img .highlight,
  .lets-started-item:nth-child(3) .card-img .highlight {
    fill: transparent;
  }
  .card-img .highlight {
    transition: all .25s;
  }
  .lets-started-item:nth-child(1):hover .card-img .highlight {
    fill: var( --primary-blue);
  }
  .lets-started-item:nth-child(2):hover .card-img .highlight {
    fill: var( --orange);
  }
  .lets-started-item:nth-child(3):hover .card-img .highlight {
    fill: var( --pink);
  }
}
</style>