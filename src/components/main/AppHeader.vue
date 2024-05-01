<script setup lang="ts">
import { ref } from 'vue';
import IconLogoMob from '../icons/IconLogoMob.vue';
import IconLogo from '../icons/IconLogo.vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};


const isHeaderHidden = ref(false);
const isLogoSmall = ref(false);

let lastScrollTop = 0;

const sectionToStopHidingHeader = document.getElementById('simpleTrickSection');

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const isPastSection = sectionToStopHidingHeader ? currentScrollTop > sectionToStopHidingHeader.offsetTop : true;


  // console.log("isPastSection = " + (currentScrollTop > sectionToStopHidingHeader.offsetTop))
  // console.log("isPastSection = " + isPastSection)



  if (currentScrollTop > lastScrollTop && isPastSection) {
    // Scrolling down
    isHeaderHidden.value = true;
  } else {
    // Scrolling up
    isHeaderHidden.value = false;
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

  if (currentScrollTop > 0) {
    isLogoSmall.value = true;
  } else {
    isLogoSmall.value = false;
  }
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

      <IconLogoMob class="logo-mob" :class="{ 'open': isOpen }" />

      <nav class="nav nav-main">
        <a href="#">Blog</a>
        <a href="#">FAQs</a>
      </nav>

      <div class="logo-wrap" :class="{ 'small': isLogoSmall }">
        <IconLogo class="logo" />
      </div>

      <nav class="nav nav-secondary">
        <RouterLink to="/login" class="login-btn">Log in</RouterLink>
        <RouterLink to="/registration" class="btn" :class="{ 'open': isOpen }">GET STARTED</RouterLink>
      </nav>
      <div class="mobile-nav">
        <ul class="menu" :class="{ 'open': isOpen }">
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQs</a></li>
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
  top: 13vw;
  left: 30px;
  right: 30px;
  width: calc(100% - 60px);
  transition: all 0.5s;
}
.logo-wrap.small {
  top: 3px;
  left: calc(50% - 102px);
  max-height: 56px;
  width: 205px;
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
  display: none;
  padding: 7px 10px;
}
.nav-secondary .btn.open {
  display: flex;
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
  z-index: 2;
  margin: 0 0 0 10px;
  display: none;
}
.logo-mob.open {
  display: block;
}
.menu {
  list-style: none;
  padding: 72px 0 0;
  margin: 0;
  position: absolute;
  top: 0;
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
  padding: 6px 20px;
}
.menu li a {
  text-decoration: none;
  color: black;
  font-size: 30px;
  letter-spacing: -1.5px;
}
.btn {
  font-family: 'Plain-Bold';
}
@media (min-width: 768px) {
  .logo-mob,
  .logo-mob.open {
    display: none;
  }
  .header {
    padding: 27px 0;
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
    padding: 13px 15px;
    margin-left: 22px;
  }
}
</style>