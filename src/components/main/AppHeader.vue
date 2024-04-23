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

      <!-- Hamburger icon -->
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
      <img alt="logo" class="logo" src="@/assets/logo.svg" />
      
      <nav class="nav nav-secondary">
        <RouterLink to="/login" class="login-btn">Log in</RouterLink>
        <RouterLink to="/registration" class="btn">GET STARTED</RouterLink>
      </nav>


      <div class="mobile-nav">
        <!-- <div class="nav-row">
          <div>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.6523 26L0.651396 1.00001" stroke="black"/>
              <line y1="-0.5" x2="35.004" y2="-0.5" transform="matrix(-0.71422 0.699921 -0.556246 -0.831018 25.6504 1)" stroke="black"/>
            </svg>

            <svg width="46" height="34" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.91638 0L0.302734 6.40836V16.75H15.53V6.40836L7.91638 0Z" fill="#03C745"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1429 16.75L15.5293 23.1584V33.5H30.7566V23.1584L23.1429 16.75Z" fill="#E1BAFF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M38.3715 16.75L30.7578 23.1584V33.5H45.9851V23.1584L38.3715 16.75Z" fill="#FC4F24"/>
            </svg>
          </div>

          <RouterLink to="/registration" class="btn">GET STARTED</RouterLink>
        </div> -->

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
}
.container {
  display: flex;
  align-items: center;
}
.logo {
  display: none;
  margin: 0 auto;
  flex: 1 0 auto;
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
.btn {
  background-color: var(--green);
  font-family: "Scto-Grotesk-A-Medium";
  font-weight: 700;
  padding: 13px 15px;
  z-index: 2;
}
.btn:hover {
  background-color: var(--yellow);
  color: var(--black);
}

nav .nav-main a {
  font-size: 12px;
  display: inline-block;
  font-family: "Scto-Grotesk-A-Medium";
  padding: 0 10px;
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


/* Hamburger styles */
.hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 999;
}
.line {
  width: 100%;
  height: 2px;
  background-color: black;
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
}
.logo-mob.open {
  display: block;
}

/* Menu styles */
.menu {
  list-style: none;
  padding: 50px 0 0;
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
  padding: 10px 20px;
}
.menu li a {
  text-decoration: none;
  color: black;
}


@media (min-width: 768px) {
  .logo {
    display: flex;
    height: 56px;
    width: 205px;
  }
  .logo-mob,
  .logo-mob.open {
    display: none;
  }
  .header {
    padding: 22px 0;
  }
  .header .nav.nav-main,
  .header .nav .login-btn {
    display: flex;
  }
  .mobile-nav,
  .hamburger-menu {
    display: none;
  }
  .nav .btn {
    margin-left: 10px;
  }
}

</style>