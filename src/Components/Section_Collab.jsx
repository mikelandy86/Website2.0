import { Fade, Slide } from "react-awesome-reveal";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export default function CollabSection() {
  return (
    <div id="collab" className="section-collab">
      <Fade direction="up" duration={2000}>
        <h1>
          Top Brands I´m Proud to Have Collaborated With: A Highlight of my
          Successful Partnerships
        </h1>
      </Fade>
      <Fade duration="2000" delay={1e2} cascade damping={1e-1}>
        <div className="collab-section-flex-container">
          <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/HAGSLogo@400px.png" />
          <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/flh-logotyp-sv-cmyk-svart.png" />
          <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/hälsotassen.png" />
          <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/ImmetropiaTextBlack.png" />
          {/* <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/FictiveReality_logo.png"/> */}
        </div>
      </Fade>
    </div>
  );
}
