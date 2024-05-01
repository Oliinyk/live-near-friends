<script setup lang="ts">
import IconLogoFace from '../icons/IconLogoFace.vue'
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-inner">
        <form>
          <div class="footer-txt">
            <p>Feedback? Ideas? Success stories? We’d love to hear from you.</p>
            <a href="mailto:hello@livenearfriends.com" class="footer-mail">hello@livenearfriends.com</a>
          </div>

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
  padding: 25px 0;
  background-color: var(--black);
  color: var(--white);
  font-size: 14px;
}
a {
  color: var(--white);
}
.footer-inner {
  display: flex;
  flex-direction: column;
  margin-bottom: 113px;
}
.label {
  margin-bottom: 8px;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 37px;
}
.form-group input {
  background-color: transparent;
  border: 1px solid var(--white);
  border-radius: 5px;
  color: var(--white);
  padding: 12px;
  flex: 1;
  outline: none;
  margin: 0 0 15px 0;
}
.form-group input::placeholder {
  color: var(--placeholder-dark);
}
.form-group button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  cursor: pointer;
  color: var(--black);
  font-size: 14px;
  font-family: 'Plain-Bold';
  text-transform: uppercase;
  border: none;
  padding: 12px 15px;
}
.footer-nav {
  list-style: none;
  line-height: 1.9;
  padding: 0;
}
.footer-nav a {
  background-color: transparent;
  padding: 0;
}
.footer-nav a:hover {
  text-decoration: underline;
}
.footer-txt {
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -.9px;
  margin: 0 0 32px;
}
.footer-mail {
  color: var(--violet);
}
.copyright {
  font-size: 14px;
  font-family: 'Plain-Bold';
  text-transform: uppercase;
  display: none;
}

@media (min-width: 545px) {
  .form-group {
    max-width: 427px;
    margin-bottom: 37px;
    flex-direction: row;
  }
  .form-group input {
    margin: 0 15px 0 0; 
  }
}

@media (min-width: 768px) {
  footer {
    padding: 25px 0;
  }
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 90px;
  }
  .footer-txt {
    font-size: 22px;
  }
}

@media (min-width: 992px) {
  .copyright {
    margin: 0;
    display: block;
  }
}
</style>

