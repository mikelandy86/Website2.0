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
              <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Avatar-remade_replaced_color2.png"></img>
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

// <iframe width="580" height="315"
// src="https://www.youtube.com/embed/nXUMsvWlsVo?autoplay=1&mute=1">

// </iframe>

{
  /* <h2 className="hero-section-info-title">{title3} </h2> */
}

// <div className="typewriter-container">
// <FaGgCircle
//   className="hero-section-info-title"
//   size={40}
//   color="#5E3AEE"
// />
// <h2 className="rainbow">

//   <Typewriter
//     options={{
//       autoStart: true,
//       delay: 70,
//       deleteSpeed: 20,
//       loop: true,
//       cursorClassName: "blink_me",
//     }}
//     onInit={(typewriter) => {
//       typewriter
//         .typeString("applikationer")

//         .pauseFor(500)

//         .deleteChars(13);

//       typewriter
//         .typeString("hemsidor")
//         .pauseFor(500)
//         .deleteChars(8);
//       typewriter
//         .typeString("VR/AR appar")
//         .pauseFor(400)
//         .deleteChars(11);

//       typewriter.typeString("spel").pauseFor(700).deleteChars(4);

//       typewriter
//         .typeString("mobil-appar")
//         .pauseFor(300)
//         .deleteChars(11)
//         .start();
//     }}
//   />
// </h2>
// </div>
