<template>
  <header class="header">
    <div class="container">
      <nav>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">FAQs</a>
      </nav>

      <img alt="logo" class="logo" src="@/assets/logo.svg" width="205" height="56" />

      <nav>
        <RouterLink to="/login">Log in</RouterLink>
        <RouterLink to="/registration" class="btn">GET STARTED</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 22px 0;
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: var(--ivory);
}
.logo {
  display: block;
  margin: 0 auto;
}
nav {
  font-size: 12px;
}
nav a {
  font-size: 12px;
  display: inline-block;
  font-family: "Scto-Grotesk-A-Medium";
  padding: 0 10px;
}
nav a:hover {
  color: var(--green);
}
.btn {
  background-color: var(--green);
  font-family: "Scto-Grotesk-A-Medium";
  font-weight: 700;
  padding: 13px 15px;
  margin-left: 10px;
}
.btn:hover {
  background-color: var(--yellow);
  color: var(--black);
}
@media (min-width: 1024px) {
  .container {
    display: flex;
    align-items: center;
  }
}
</style>

