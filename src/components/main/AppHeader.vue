<script setup lang="ts">
import { ref } from 'vue';
import IconLogoMob from '../icons/IconLogoMob.vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="hamburger-menu" @click="toggleMenu" :class="{ 'open': isOpen }">
        <div class="line top" :class="{ 'open': isOpen }"></div>
        <div class="line middle" :class="{ 'open': isOpen }"></div>
        <div class="line bottom" :class="{ 'open': isOpen }"></div>
      </div>
      <IconLogoMob class="logo-mob" :class="{ 'open': isOpen }" />
      <nav class="nav nav-main">
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">FAQs</a>
      </nav>
      <img alt="logo" class="logo" :class="{ 'open': isOpen }" src="@/assets/logo.svg" />
      <nav class="nav nav-secondary">
        <RouterLink to="/login" class="login-btn">Log in</RouterLink>
        <RouterLink to="/registration" class="btn" :class="{ 'open': isOpen }">GET STARTED</RouterLink>
      </nav>
      <div class="mobile-nav">
        <ul class="menu" :class="{ 'open': isOpen }">
          <li><a href="#">About</a></li>
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
  background-color: var(--ivory);
  padding: 12px 0;
}
.container {
  display: flex;
  align-items: center;
}
.logo {
  height: auto;
  width: 100%;
  max-width: 110px;
  margin: 0 auto 0 calc(50% - 75px);
  flex: 1 0 auto;
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
  font-size: 12px;
  display: inline-block;
  font-family: "Scto-Grotesk-A-Medium";
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
@media (min-width: 768px) {
  .logo {
    display: flex;
    max-height: 56px;
    max-width: 205px;
    margin: 0 auto;
    flex: 1 0 auto;
  }
  .logo-mob,
  .logo-mob.open {
    display: none;
  }
  .header {
    padding: 22px 0;
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