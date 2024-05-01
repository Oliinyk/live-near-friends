<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentImage = ref(1);

const handleScroll = () => {
  const itemsText = document.querySelectorAll('.item-text');
  for (let i = 0; i < itemsText.length; i++) {
    const item = itemsText[i];
    const rect = item.getBoundingClientRect();

    if ( rect.top >= 0 && rect.bottom <= window.innerHeight) {
      currentImage.value = i + 1;
    } else if (i === 1 && rect.top >= 0 && rect.bottom <= window.innerHeight + 500) {
      currentImage.value = i + 1;
    } else if (i === 2 && rect.top >= 0 && rect.bottom <= window.innerHeight + 500) {
      currentImage.value = i + 1;
    }

  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <section class="how-it-works">

    <div class="info-col">
      <h2 class="title">How it works</h2>
      <div class="how-it-works-inner">
        <div class="text-holder item-text">
          <p>Explore ideal <span class="bold-text uppercase-text">places</span> for you and your friends to live.</p>
        </div>
        <div class="text-holder item-text">
          <p>Get your <span class="bold-text uppercase-text">friends</span> involved.</p>
        </div>
        <div class="text-holder item-text">
          <p>Find <span class="bold-text uppercase-text">homes</span> for sale or rent
          that fit everyone’s needs.</p>
        </div>
        <div class="text-holder item-text">
          <p>Work with a Live Near Friends <span class="bold-text uppercase-text">specialist</span> agent to tour homes
          and sign on the dotted line.</p>
        </div>
      </div>
      <div>
        <a href="#" class="btn btn-large">START EXPLORING NEIGHBORHOODS</a>
      </div>
    </div>

    <div class="app-col">
      <div class="app-col-inner">
        <div class="item-img" :class="{ 'visible': currentImage === 1 }">
          <img alt="how-it-works" src="@/assets/img/how-it-works-1.png" />
        </div>
        <div class="item-img" :class="{ 'visible': currentImage === 2 }">
          <img alt="how-it-works" src="@/assets/img/how-it-works-2.png" />
        </div>
        <div class="item-img" :class="{ 'visible': currentImage === 3 }">
          <img alt="how-it-works" src="@/assets/img/how-it-works-3.png" />
        </div>
        <div class="item-img item-video" :class="{ 'visible': currentImage === 4 }">
          
          <div class="item-video-wrap">
            <div class="item-inner-video">
              <video width="" height="350" autoplay loop muted>
                <source src="@/assets/img/how-it-works-4.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="video-text-holder">
              <p>Great to meet you!
              How can I help?</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works {
  background-color: var(--ivory);
  text-align: center;
  position: relative;
}
.title {
  font-family: "ConsortRRBoldCondensed";
  font-size: 40px;
  line-height: 0.85;
  margin: 0 0 58px;
  color: var(--black);
}
.how-it-works-inner {
  position: relative;
}
.how-it-works-inner {
  background-image: url('../assets/img/IconHowItWorksMobBg.svg');
  background-repeat: no-repeat;
  background-position: center 15px;
}
.how-it-works-inner p {
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -1px;
  text-wrap: balance;
  color: var(--black);
}
.text-holder {
  position: relative;
  z-index: 1;
  max-width: 258px;
  margin: 0 auto;
  text-wrap: balance;
  padding-top: 100px;
  padding-bottom: 743px;
}
.text-holder:last-child {
  max-width: 350px;
  padding-bottom: 113px;
}
.app-col-inner {
  position: sticky;
  top: 0;
  height: 100vh;
}
.item-img {
  opacity: 0;
  transition: opacity 0.5s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.visible {
  opacity: 1;
}
.item-video-wrap {
  position: relative;
}
.item-inner-video {
  max-width: 350px;
  max-height: 350px;
  overflow: hidden;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  position: relative;
}
.video-text-holder {
  background-color: var(--white);
  border-radius: 20px 20px 0 20px;
  position: absolute;
  top: 55px;
  left: -107px;
  font-size: 22px;
  letter-spacing: -1px;
  line-height: 1.3;
  max-width: 215px;
  padding: 15px 20px;
  text-align: left;
}
.video-text-holder::after {
  content: '';
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 15px 15px 0;
  border-color: transparent var(--white) transparent transparent;
  transform: rotate(0deg);
  position: absolute;
  right: 0;
  bottom: -15px;
}
@media (min-width: 768px) {
  .how-it-works {
    display: flex;
  }
  .title {
    font-size: 100px;
    margin: 0 0 219px;
  }
  .how-it-works-inner p {
    font-size: 22px;
  }
  .how-it-works-inner {
    background-image: url('../assets/img/IconHowItWorksBg.svg');
    background-position: center 15px;
  }
  .info-col,
  .app-col {
    width: 50%;
  }
  .info-col {
    padding: 116px 0 130px;
    overflow: hidden;
  }
  .app-col {
    background-color: var(--blue-lagoon);
    padding: 100px 0 0;
  }
}
</style>