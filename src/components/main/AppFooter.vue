<script setup lang="ts">
import IconLogoFace from '../icons/IconLogoFace.vue'
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-inner">
        <form>
          <p class="label">Newsletter</p>
          <div class="form-group">
            <input type="text" placeholder="Email Address">
            <button>SIGN UP</button>
          </div>

          <ul class="footer-nav">
            <li><a href="">Jobs</a></li>
            <li><a href="">Terms and conditions</a></li>
            <li><a href="">Privacy policy</a></li>
          </ul>
          <div class="footer-txt">
            <p>Feedback? Ideas? Success stories?</p>
            <p>We’d love to hear from you.</p>
          </div>
          <a href="mailto:hello@livenearfriends.com" class="footer-mail">hello@livenearfriends.com</a>
        </form>

        <p class="copyright">© Live Near Friends 2024</p>
      </div>

      <div class="footer-area">
        <IconLogoFace />
      </div>

    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 10px 0;
  background-color: var(--black);
  color: var(--white);
  font-size: 12px;
  font-weight: 300;
}
form {
  width: 100%;
  max-width: 440px;
}
a {
  color: var(--white);
}
.footer-inner {
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
}
.label {
  margin-bottom: 8px;
}
.form-group {
  display: flex;
  margin-bottom: 15px;
}
.form-group input {
  background-color: transparent;
  border: 1px solid var(--white);
  color: var(--white);
  padding: 10px 20px;
  flex: 1;
  outline: none;
}
.form-group input::placeholder {
  color: var(--placeholder-dark);
}
.form-group button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  cursor: pointer;
  color: var(--black);
  font-family:"Scto-Grotesk-A-Medium";
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  padding: 10px 26px;
}
.footer-nav {
  list-style: none;
  line-height: 1.8;
  padding: 0;
  margin: 0 0 24px;
}
.footer-nav a {
  background-color: transparent;
  padding: 0;
}
.footer-nav a:hover {
  text-decoration: underline;
}
.footer-txt {
  line-height: 1.2;
  margin: 0 0 5px;
}
.footer-mail {
  text-decoration: underline;
}
.copyright {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 24px 0 0;
}

@media (min-width: 768px) {
  footer {
    padding: 25px 0;
  }
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 135px;
  }
  .form-group button {
    padding: 15px 31px;
  }
  .copyright {
    margin: 0;
  }
}
</style>

