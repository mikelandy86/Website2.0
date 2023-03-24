import { FaUserAlt } from "react-icons/fa";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
export default function BioSection() {
  return (
    <div id="bio" className="section-bio">
      <div className="section-bio-center-div">
        <div className="section-bio-title-contact">
          <h1>About me</h1>
        </div>
        <div className="section-bio-flexrow">
          <div className="section-bio-infosection">
            <div className="section-bio-imagesection">
              <Fade duration="2000" triggerOnce={true} direction="up">
                <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/PortraitMikael.jpg"></img>
              </Fade>
            </div>
            <div className="section-bio-infosectionText">
              {/* <div id="blockA" className="section-bio-skills-container">
           
              <span>C#</span>
              <span>.NET</span>
              <span>React</span>
              <span>AWS</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Figma</span>
              <span>Javascript</span>
              <span>Bootstrap</span>
              <span>Unity</span>
              <span>Maya</span>
              <span>Virtual Reality</span>
              <span>Augmented Reality</span>
              <span>IOS</span>
              <span>Android</span>
              <span>GIT</span>
           
            </div> */}
              <Fade duration="2000" triggerOnce={true} direction="up">
                <div id="blockB" className="section-bio-title-info">
                  <h2>Mikael Hverven-Landy</h2>
                  <h3>System Developer</h3>
                </div>
                <div id="blockB" className="section-bio-infodesc">
                  <p>
                    I am an ambitious, solution-focused, and creative developer
                    who thrives on new challenges and has a strong interest in
                    the creative process of combining logic and graphics. This
                    has also led me into front-end development using React and
                    Javascript. I have had the opportunity to work on exciting
                    projects utilizing innovative technologies such as VR and
                    AR, and I am passionate about developing new solutions and
                    imaginative ways to drive society forward with a team of
                    motivated colleagues.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
