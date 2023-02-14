import { Fade, Slide } from "react-awesome-reveal";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export default function CollabSection() {
  return (
    <div id="collab" className="section-collab">
      <Fade triggerOnce="false" damping={23}>
<h1>From start-ups to industry icons, we evolve ideas and products into lifestyle brands</h1>
</Fade>
<div className="collab-section-flex-container">
  <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/HAGSLogo@400px.png"/>
  <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/flh-logotyp-sv-cmyk-svart.png"/> 
  <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/hälsotassen.png"/>
  <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/ImmetropiaTextBlack.png"/>
</div>
    </div>
  );
}
