<script lang="ts">
import { ref } from 'vue';
import imgBg from '@/assets/img/img-bg.png';

export default {
  name: 'LetsStartedSection',
  setup() {
    const items = ref([
      {
        imgSrc: imgBg,
        title: 'Minihood',
        subtitle: 'Buy and rent homes within a short walk.',
        buttonHref: '#',
        buttonText: 'GET STARTED',
        isActive: true
      },
      {
        imgSrc: imgBg,
        title: 'Apartment Cluster',
        subtitle: 'Rent a cluster of apartments in the same building.',
        buttonHref: '#',
        buttonText: 'COMING SOON – GET NOTIFIED',
        isActive: false
      },
      {
        imgSrc: imgBg,
        title: 'Backyard Buds',
        subtitle: 'Share a backyard with a friend.',
        buttonHref: '#',
        buttonText: 'COMING SOON – GET NOTIFIED',
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
  <section class="lets-started-section">
    <div class="container">
      <h2 class="title">Let’s get started</h2>
      <p class="subtitle">Which one of these sounds closest to your vision?</p>
      <div class="lets-started-items">
        <div v-for="(item, index) in items" :key="index" class="lets-started-item">
          <img alt="" :src="item.imgSrc" />
          <h3 class="item-title">{{ item.title }}</h3>
          <p class="item-subtitle">{{ item.subtitle }}</p>
          <a :href="item.buttonHref" class="btn" :class="{ active: item.isActive }">{{ item.buttonText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lets-started-section {
  text-align: center;
  background-color: var(--violet);
  padding: 58px 0 61px;
  color: var(--black);
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
  margin: 0 0 25px;
  text-wrap: balance;
}
.lets-started-items {
  display: grid;
  gap: 30px;
}
.lets-started-item {
  background-color: var(--ivory);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.lets-started-item img {
  max-width: 100%;
  height: auto;
  margin: 0 0 40px;
}
.item-title {
  font-family: "Consort RR LightCondensed";
  font-size: 48px;
  line-height: 0.85;
  margin: 0 0 20px;
}
.item-subtitle {
  font-size: 16px;
  line-height: 1.2;
  max-width: 210px;
  margin: 0 auto 34px;
  text-wrap: balance;
}
.btn {
  display: inline-block;
  background-color: var(--gray);
  font-family: "Scto-Grotesk-A-Medium";
  font-weight: 700;
  font-size: 10px;
  padding: 9px 0;
  width: 100%;
  margin: auto 0 0;
}
.btn.active {
  background-color: var(--green);
}
.btn.active:hover {
  background-color: var(--yellow);
  color: var(--black);
}
@media (min-width: 1440px) {
  .lets-started-items {
    gap: 30px;
  }
  .item-title {
    font-size: 60px;
    margin: 0 0 27px;
  }
}
@media (min-width: 768px) {
  .lets-started-section {
    padding: 115px 0 61px;
  }
  .title {
    font-size: 100px;
    margin: 0 0 38px;
  }
  .subtitle {
    font-size: 20px;
    margin: 0 0 50px;
  }
  .lets-started-items {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .lets-started-item img {
    margin: 0 0 43px;
  }
  .item-subtitle {
    font-size: 20px;
    margin: 0 auto 44px;
    max-width: 260px;
  }
  .btn {
    font-size: 12px;
    padding: 12px 0;
  }
}
</style>