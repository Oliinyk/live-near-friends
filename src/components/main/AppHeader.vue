<template>
  <header>
    <div class="container">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/faq">FAQs</RouterLink>
      </nav>

      <img alt="logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

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

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
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

