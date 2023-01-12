
export default function Footer (){
  return (
    <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.facebook.com/micke.landy.98">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/in/mikael-hendler-landy/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com/mikelandy86/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Hem</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Projekt</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Om</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Kontakt</a></li>

    </ul>
    <p>&copy;2022 Mikael Hverven-Landy | All Rights Reserved</p>
  </footer>

  );
};