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
          <span class="num">1</span>
          <p>Explore ideal <span class="bold-text uppercase-text">places</span> for you and your friends to live.</p>
        </div>

        <div class="item-img-mob">
          <img alt="how-it-works" src="@/assets/img/how-it-works-1.svg" />
        </div>

        <div class="text-holder item-text">
          <span class="num">2</span>
          <p>Get your <span class="bold-text uppercase-text">friends</span> involved.</p>
        </div>

        <div class="item-img-mob">
          <img alt="how-it-works" src="@/assets/img/how-it-works-2.svg" />
        </div>

        <div class="text-holder item-text">
          <span class="num">3</span>
          <p>Find <span class="bold-text uppercase-text">homes</span> for sale or rent
          that fit everyone’s needs.</p>
        </div>

        <div class="item-img-mob">
          <img alt="how-it-works" src="@/assets/img/how-it-works-3.svg" />
        </div>

        <div class="text-holder item-text last-item-text">
          <span class="num">4</span>
          <p>Work with a Live Near Friends <span class="bold-text uppercase-text">specialist</span> agent to tour homes
          and sign on the dotted line.</p>
        </div>

        <div class="item-img-mob item-video-mob">
          <div class="item-video-wrap">
            <div class="item-inner-video">
              <img src="@/assets/img/how-it-works-4.gif" alt="how-it-works-4">
            </div>
            <div class="video-text-holder">
              <p>Great to meet you!
              How can I help?</p>
            </div>
          </div>
        </div>

      </div>
      <div class="btn-wrap">
        <a href="#" class="btn btn-large">
          <span class="text-btn-desk">START EXPLORING NEIGHBORHOODS</span>
          <span class="text-btn-mob">Explore what’s possible</span>
        </a>
      </div>
    </div>

    <div class="app-col">
      <div class="app-col-inner">
        <div class="item-img" :class="{ 'visible': currentImage === 1 }">
          <img alt="how-it-works" src="@/assets/img/how-it-works-1.svg" />
        </div>
        <div class="item-img" :class="{ 'visible': currentImage === 2 }">
          <img alt="how-it-works" src="@/assets/img/how-it-works-2.svg" />
        </div>
        <div class="item-img" :class="{ 'visible': currentImage === 3 }">
          <img alt="how-it-works" src="@/assets/img/how-it-works-3.svg" />
        </div>
        <div class="item-img item-video" :class="{ 'visible': currentImage === 4 }">
          <div class="item-video-wrap">
            <div class="item-inner-video">
              <img src="@/assets/img/how-it-works-4.gif" alt="how-it-works-4">
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
  padding: 57px 0 60px;
}
.title {
  font-family: "ConsortRRBoldCondensed";
  font-size: 40px;
  line-height: 0.85;
  margin: 0 0 55px;
  color: var(--black);
}
.how-it-works-inner {
  position: relative;
  background-size: contain;
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
  max-width: 225px;
  max-height: 225px;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  position: relative;
}
.item-inner-video img {
  object-fit: cover;
  height: 225px;
}
.video-text-holder {
  background-color: var(--white);
  color: var(--black);
  border-radius: 20px 20px 0 20px;
  position: absolute;
  top: -45px;
  left: -90px;
  font-size: 22px;
  letter-spacing: -1px;
  line-height: 1.3;
  max-width: 183px;
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
.how-it-works .num {
  color: var(--ivory);
  background-color: var(--black);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
}
.item-img-mob {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-lagoon);
  border-radius: 10px;
  padding: 59px 0;
  margin: 25px auto 60px;
  max-width: 345px;
}
.item-video-mob {
  justify-content: flex-end;
  padding: 105px 15px 59px;
  margin-bottom: 32px;
}
.item-img-mob img {
  max-width: 225px;
}
.app-col,
.text-btn-desk {
  display: none;
}
.btn-wrap {
  padding: 0 15px;
}
.btn-wrap .btn {
  width: 100%;
  max-width: 345px;
}
@media (min-width: 768px) {
  .how-it-works {
    display: flex;
    padding: 0;
  }
  .title {
    font-size: 80px;
    margin: 0 0 100px;
  }
  .how-it-works-inner p {
    font-size: 22px;
  }
  .how-it-works-inner {
    background-image: url('../assets/img/IconHowItWorksBg.svg');
    background-position: center 15px;
    background-repeat: no-repeat;
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
    display: block;
  }
  .text-holder {
    padding-top: 100px;
    padding-bottom: 743px;
  }
  .last-item-text {
    max-width: 350px;
    padding-bottom: 113px;
  }
  .item-inner-video {
    max-width: 350px;
    max-height: 350px;
    border-radius: 30px;
  }
  .item-inner-video img {
    height: 350px;
  }
  .how-it-works .num {
    display: none;
  }
  .item-img-mob,
  .text-btn-mob {
    display: none;
  }
  .text-btn-desk {
    display: flex;
  }
  .video-text-holder {
    top: 55px;
    left: -107px;
    max-width: 215px;
  }
  .btn-wrap {
    padding: 0;
  }
  .btn-wrap .btn {
    width: auto;
    max-width: none;
  }
}
@media only screen and (min-width: 992px) {
  .title {
    font-size: 100px;
    margin: 0 0 219px;
  }
}
@media only screen and (min-width: 1200px) {
  .how-it-works-inner {
    background-size: auto;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px)  {
  .text-holder {
    padding-bottom: 57vw;
  }
  .last-item-text {
    padding-bottom: 113px;
  }
}
@media only screen and (min-width: 868px) and (max-width: 991px)  {
  .text-holder {
    padding-bottom: 55vw;
  }
  .last-item-text {
    padding-bottom: 113px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 867px)  {
  .text-holder {
    padding-bottom: 52vw;
  }
  .last-item-text {
    padding-bottom: 113px;
  }
}
</style>