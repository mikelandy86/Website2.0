import { FaGgCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class="footer">
      <div className="footer-container">
                  <a href="https://mikelandy86.github.io/website2.0/">
                  <img
                className="header-section-logo-footer"
                src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/mhl_logo.png"
              ></img>
              <h1>Living, learning, & leveling up one day at a time.</h1>
            </a>
      <ul class="social-icon">
        <li class="social-icon__item">
          <a class="social-icon__link" href="#contact">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.linkedin.com/in/mikael-hendler-landy/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.instagram.com/mikelandy86/"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>

      <p>
        Handcrafted by me &copy;
Mikael Hverven-Landy
      </p>
      </div>
    </footer>
  );
}
