<template>
  <header>
    <div class="container">
      <nav>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">FAQs</a>
      </nav>

      <img alt="logo" class="logo" src="@/assets/logo.svg" width="205" height="100" />

      <nav>
        <RouterLink to="/login">Log in</RouterLink>
        <RouterLink to="/registration">GET STARTED</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
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
  padding: 0 1rem;
}
@media (min-width: 1024px) {
  .container {
    display: flex;
    align-items: center;
  }
  nav {
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>

