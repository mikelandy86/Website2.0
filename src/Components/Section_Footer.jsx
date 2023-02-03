import { FaGgCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class="footer">
                  <a href="https://mikelandy86.github.io/website2.0/">
              <FaGgCircle
                className="hero-section-info-title"
                size={60}
                color="#FFF"
              />
              <h1>Living, learning, & leveling up one day at a time.</h1>
            </a>
      <ul class="social-icon">
        <li class="social-icon__item">
          <a class="social-icon__link" href="h">
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
    </footer>
  );
}
