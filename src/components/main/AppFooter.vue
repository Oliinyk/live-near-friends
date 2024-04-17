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

      <div class="footer-area">
        <p class="area-content">
          Live
          <span class="figure green"></span>
          Near 
          Friends
          <span class="figure pink"></span>
          <span class="figure red"></span>
        </p>
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


  .footer-area {

  }
  .area-content  {
    font-size: 180px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
  }
  .figure {
    height: 95px;
    width: 124px;
    /* margin: 0 50px 0 0; */
    position: relative;
    display: inline-block;
  }
  .figure:before {
    content: "";
    height: 0; 
    width: 0;
    position: absolute; 
    left: 0; 
    top: -35px;
    border-bottom: 35px solid #B1BA5C;
    border-left: 62px solid transparent;
    border-right: 62px solid transparent;
  }

  .figure.green {
    background: #03C745;
  }
  .figure.green:before {
    border-bottom: 35px solid #03C745;
  }

  .figure.pink {
    background: #E1BAFF;
  }
  .figure.pink:before {
    border-bottom: 35px solid #E1BAFF;
  }

  .figure.red {
    background: #FC4F24;
  }
  .figure.red:before {
    border-bottom: 35px solid #FC4F24;
  }


  @media (min-width: 1024px) {

  }
</style>

