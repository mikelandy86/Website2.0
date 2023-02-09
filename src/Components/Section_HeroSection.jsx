import { FaGgCircle } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  let title = "";
  let title2 = "";
  let title3 = "";
  title = `DevOps, Frontend & Unity Developer`;
  title2 = `smarta, interaktiva`;
  let desc =
    "As a designer and coder, I create elegantly simple solutions with passion, bringing beauty and connection through simplicity.";
  return (
    <div className="section-hero-section">
      {/* <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}
      <div className="hero-section-row-flex">
        <div className="hero-section-info-section">
          {/* <Fade cascade triggerOnce="false" direction="left"> */}

          <h1 className="hero-section-info-title">{title} </h1>
          {/* <h2 className="hero-section-info-title">{title2} </h2> */}

          <Fade triggerOnce="false" damping={23}>
            <p className="hero-section-info-desc">
              <Typewriter
                options={{
                  autoStart: true,
                  delay: 30,
                  deleteSpeed: 20,
                  loop: false,
                  cursorClassName: "blink_me",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "I create simple solutions with passion, bringing beauty through simplicity."
                    )

                    .start();
                }}
              />
              {/* {desc} */}
            </p>
          </Fade>
          {/* <a href="#contact" className="hero-section-info-button">
            <h2>Kontakt</h2>
          </a> */}
        </div>

        <div className="hero-section-image-section">
          {/* <div className="hero-section-image-image-bg"></div> */}
          <div className="hero-section-image">
            <Fade triggerOnce="true">
              <img src="./src/assets/public/images/Test_M2.png"></img>
            </Fade>
            {/* <iframe
              src="https://www.youtube.com/embed/H5PsBdyi2so?controls=0&showinfo=0&rel=0&autoplay=1&start=7&end=200&loop=1&mute=1&playlist=H5PsBdyi2so"
              frameborder="0"
              allowfullscreen
            ></iframe> */}
          </div>
        </div>
        <div className="hero-foot">
          <div className="hero-section-image-computers">
            <img
              className="hero-section-image-computers-image"
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/hero.svg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Test M.png
