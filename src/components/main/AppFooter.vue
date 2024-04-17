<template>
  <footer>
    <div class="container">
      <div class="footer-inner">
        <form>
          <p>Newsletter</p>
          <div class="form-group">
            <input type="text" placeholder="Email Address">
            <button>SIGN UP</button>
          </div>

          <ul>
            <li><a href="">Jobs</a></li>
            <li><a href="">Terms and conditions</a></li>
            <li><a href="">Privacy policy</a></li>

            <li>
              <p>Feedback? Ideas? Success stories?</p>
              <p>We’d love to hear from you.</p>
            </li>
            <li><a href="mailto:hello@livenearfriends.com" class="">hello@livenearfriends.com</a></li>
          </ul>
        </form>

        <p class="copyright">© Live Near Friends 2024</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    padding: 20px 0;
    background-color: var(--black);
    color: var(--white);
    font-size: 12px;
    font-weight: 300;
  }
  a {
    color: var(--white);
  }
  .footer-inner {
    display: flex;
    justify-content: space-between;
  }
  .form-group {
    display: flex;
  }
  .form-group input {
    background-color: transparent;
    border: 1px solid var(--white);
    padding: 10px 15px;
  }
  .form-group input::placeholder {
    color: var(--placeholder-dark);
  }
  .form-group button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    color: var(--black);
    font-weight: 700;
    text-transform: uppercase;
    border: none;
  }

  @media (min-width: 1024px) {

  }
</style>

