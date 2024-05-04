<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import IconLogoMob from '../icons/IconLogoMob.vue';
import IconLogo from '../icons/IconLogo.vue';

const isOpen = ref(false);
const isHeaderHidden = ref(false); // hide default header
const isLogoSmall = ref(false);
const isLogoMob = ref(true);
let lastScrollTop = 0;

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleScroll = () => {
  const sectionToStopHidingHeader = document.getElementById('simpleTrickSection');
  if (!sectionToStopHidingHeader) return;

  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Hiding the header if the user scrolled down the page and reached the simpleTrickSection
  isHeaderHidden.value = currentScrollTop >= sectionToStopHidingHeader.offsetTop;

  // Show the header if the user scrolled up the page and the header was hidden
  if (currentScrollTop < lastScrollTop && isHeaderHidden.value) {
    isHeaderHidden.value = false;
  }

  lastScrollTop = currentScrollTop;

  // small logo
  if (currentScrollTop > 0) {
    isLogoSmall.value = true;
  } else {
    isLogoSmall.value = false;
  }

  //mobile logo
  if (currentScrollTop > 250) {
    isLogoMob.value = false;
  } else {
    isLogoMob.value = true;
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
  <header class="header" :class="{ 'header-hide': isHeaderHidden, 'header-small': isLogoSmall }">
    <div class="container">
      <div class="hamburger-menu" @click="toggleMenu" :class="{ 'open': isOpen }">
        <div class="line top" :class="{ 'open': isOpen }"></div>
        <div class="line middle" :class="{ 'open': isOpen }"></div>
        <div class="line bottom" :class="{ 'open': isOpen }"></div>
      </div>

      <IconLogoMob class="logo-mob" :class="{ 'hide': isLogoMob, 'open': isOpen }"/>

      <nav class="nav nav-main">
        <a href="#blog-section">Blog</a>
        <a href="#faq-section">FAQs</a>
      </nav>

      <div class="logo-wrap" :class="{ 'small': isLogoSmall }">
        <IconLogo class="logo" />
      </div>

      <nav class="nav nav-secondary">
        <RouterLink to="/login" class="login-btn">Log in</RouterLink>
        <RouterLink to="/registration" class="btn">GET STARTED</RouterLink>
      </nav>
      <div class="mobile-nav">
        <ul class="menu" :class="{ 'open': isOpen }">
          <li><a href="#blog-section" @click="toggleMenu">Blog</a></li>
          <li><a href="#faq-section" @click="toggleMenu">FAQs</a></li>
          <li><a href="#">Log in</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 9;
  padding: 12px 0;
}
.container {
  display: flex;
  align-items: center;
  position: relative;
}
.logo-wrap {
  position: absolute;
  top: 11vw;
  left: 15px;
  right: 15px;
  width: calc(100% - 30px);
  transition: all 0.5s;
  display: none;
}
.logo {
  height: 100%;
  width: 100%;
}
.logo.open {
  display: none;
}
.header .nav.nav-main,
.header .nav .login-btn {
  display: none;
}
nav {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.nav-secondary {
  margin: 0 0 0 auto;
  justify-content: flex-end;
}
.nav-secondary .btn {
  font-size: 12px;
  padding: 7px 10px;
}
.btn {
  padding: 13px 15px;
  z-index: 2;
}
.btn:hover {
  color: var(--black);
}
nav a {
  font-size: 40px;
  font-family: "ConsortRRBoldCondensed";
}
nav a:hover {
  color: var(--green);
}
.mobile-nav {
  display: block;
  position: absolute;
  background: var(--ivory);
  top: 0;
  left: 0;
  width: 100%;
}
.hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 9;
}
.line {
  width: 100%;
  height: 1px;
  background-color: var(--black);
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.top.open {
  transform: translateY(9px) rotate(45deg);
}
.middle.open {
  opacity: 0;
}
.bottom.open {
  transform: translateY(-9px) rotate(-45deg);
}
.logo-mob {
  margin: 0 0 0 10px;
  transition: all .25s;
  z-index: 2;
}
.logo-mob.hide {
  opacity: 0;
}
.logo-mob.open {
  opacity: 1;
}
.menu {
  list-style: none;
  padding: 107px 0 42px;
  margin: 0;
  position: absolute;
  top: -12px;
  left: 0;
  width: 100%;
  background-color: var(--ivory);
  transition: transform 0.3s ease;
  transform: translateY(-100%);
}
.menu.open {
  transform: translateX(0);
}
.menu li {
  padding: 10px 20px;
}
.menu li a {
  text-decoration: none;
  color: black;
  font-family: "ConsortRRBoldCondensed";
  font-size: 40px;
  line-height: 1;
}
.btn {
  font-family: 'Plain-Bold';
}
@media (min-width: 768px) {
  .logo-mob {
    display: none;
  }
  .logo-wrap {
    top: 9vw;
    display: block;
  }
  .logo-wrap.small {
    top: 0;
    left: calc(50% - 102px);
    max-height: 56px;
    width: 205px;
  }
  .header {
    padding: 29px 0;
    transition: all 0.5s ease;
  }
  .header-hide {
    transform: translateY(-100%);
  }
  .header .nav.nav-main,
  .header .nav.nav-secondary {
    flex: 1 0 auto;
  }
  .logo.open,
  .header .nav.nav-main,
  .header .nav .login-btn {
    display: flex;
  }
  nav a {
    font-size: 14px;
    font-family: 'Plain-Light';
    display: inline-block;
  }
  .nav.nav-main a + a {
    padding: 0 0 0 22px;
  }
  .mobile-nav,
  .hamburger-menu {
    display: none;
  }
  .nav-secondary .btn {
    display: flex;
    padding: 10px 15px;
    margin-left: 22px;
  }
}
@media (min-width: 1024px) {
  .logo-wrap {
    left: 30px;
    right: 30px;
    width: calc(100% - 60px);
  }
}
@media (min-width: 1440px) {
  .logo-wrap {
    top: 163px;
  }
}
</style>