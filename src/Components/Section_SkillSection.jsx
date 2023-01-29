import { RiStackLine } from "react-icons/ri";
import { SiUnity } from "react-icons/si";
import { HiCode } from "react-icons/hi";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
export default function SkillSection() {
  return (
    <div id="skills" className="section-skills">
      <div className="section-skills-container">
        <div className="section-skills-column-container">
          <div className="section-skills-column">
            <div className="top-column-section">
              <RiStackLine
                className="section-skills-column-icon"
                size={70}
                color="#141c3a"
              />
              <h2>Backend Developer</h2>
              <h3>
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </h3>
            </div>
            <div className="middle-column-section">
              <h2>Things I enjoy designing:</h2>
              <h3>UX, UI, Web, Apps, Logos</h3>
            </div>
            <div className="bottom-column-section">
              <h2>Design Tools:</h2>
              <h3>
                <ul>
                  <li>Affinity Designer</li>
                  <li>Figma</li>
                  <li>Font Awesome</li>
                  <li>Pen & Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                </ul>
              </h3>
            </div>
          </div>
          <div className="section-skills-column">
            <div className="top-column-section">
              <HiCode
                className="section-skills-column-icon"
                size={70}
                color="#141c3a"
              />
              <h2>Frontend Developer</h2>
              <h3>
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </h3>
            </div>
            <div className="middle-column-section">
              <h2>Things I enjoy designing:</h2>
              <h3>UX, UI, Web, Apps, Logos</h3>
            </div>
            <div className="bottom-column-section">
              <h2>Design Tools:</h2>
              <h3>
                <ul>
                  <li>Affinity Designer</li>
                  <li>Figma</li>
                  <li>Font Awesome</li>
                  <li>Pen & Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                </ul>
              </h3>
            </div>
          </div>
          <div className="section-skills-column">
            <div className="top-column-section">
              <SiUnity
                className="section-skills-column-icon"
                size={70}
                color="#141c3a"
              />
              <h2>Unity Developer</h2>
              <h3>
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </h3>
            </div>
            <div className="middle-column-section">
              <h2>Things I enjoy designing:</h2>
              <h3>UX, UI, Web, Apps, Logos</h3>
            </div>
            <div className="bottom-column-section">
              <h2>Design Tools:</h2>
              <h3>
                <ul>
                  <li>Affinity Designer</li>
                  <li>Figma</li>
                  <li>Font Awesome</li>
                  <li>Pen & Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                </ul>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <span>C#</span>
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
<span>GIT</span> */
}
