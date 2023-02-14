import { FaGgCircle } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import ReactPlayer from "react-player";

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
                    <video loop muted autoPlay id="vid"className="videoHero" width="820" height="540" > <source src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Dark_Colorful.mp4"   type="video/mp4"></source></video>

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
                      "Simple solutions"
                    )

                    .start();
                }}
              />
              {/* {desc} */}
            </p>
            <p className="hero-section-info-desc2">
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
                      "Bringing beauty through simplicity."
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
         
          <div className="hero-section-image">
            <Fade triggerOnce="true">

              {/* <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Test_M2.png"></img> */}
            </Fade>

          </div>
        </div>
        <div className="hero-foot">
          <div className="hero-section-image-computers">
            {/* <img
              className="hero-section-image-computers-image"
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/hero.svg"
            ></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Test M.png
