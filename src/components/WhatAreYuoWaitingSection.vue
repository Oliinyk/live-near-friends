<template>
  <section class="what-are-you-waiting">
    <div class="container">
      <h2 class="title">What are you waiting for? Start your minihood today.</h2>
      <a href="#" class="btn">GET STARTED</a>
    </div>
  </section>
</template>

<style scoped>
.what-are-you-waiting {
  /* padding: 30px 0 50px; */
  min-height: 100vh;
  background-image: url('../assets/img/what-are-you-waiting.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: "Consort RR LightCondensed";
  font-size: 40px;
  line-height: 0.85;
  color: var(--white);
  max-width: 940px;
  margin: 0 auto 20px;
}
.subtitle {
  font-size: 16px;
  line-height: 1.2;
  max-width: 550px;
  margin: 0 0 25px;
}

@media (min-width: 768px) {
  /* .what-are-you-waiting {
    padding: 270px 0 275px;
  } */
  .title {
    font-size: 100px;
    margin: 0 auto 47px;
    color: var(--white);
  }
  .subtitle {
    font-size: 20px;
    margin: 0 0 45px;
  }
  .btn {
    padding: 14px 17px;
  }
}
</style>
