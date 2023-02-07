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
                color="#332A99;"
              />
              <h2>Dev Ops</h2>
              <h3>
              I value effective collaboration and clear communication among my team.
              </h3>
            </div>
            <div className="middle-column-section">
              <h2>Things I enjoy working with:</h2>
              <h3>CI/CD, Automation, Git, YAML, VS</h3>
            </div>
            <div className="bottom-column-section">
              <h2>Tools:</h2>
              <h3>
                <ul>
                  <li>Azure DevOps</li>
                  <li>Pipelines</li>
                  <li>Test Plans</li>
                  <li>Artifacts</li>
                  <li>Azure Monitor</li>
                  <li>Security & Compliance</li>
                </ul>
              </h3>
            </div>
          </div>
          <div className="section-skills-column">
            <div className="top-column-section">
              <HiCode
                className="section-skills-column-icon"
                size={70}
                color="#332A99;"
              />
              <h2>Frontend Developer</h2>
              <h3>
                I value UX, accessibility, performance, maintainability and scalability.
              </h3>
            </div>
            <div className="middle-column-section">
              <h2>Things I enjoy working with:</h2>
              <h3>UX, UI, Web, Apps, Accessibility</h3>
            </div>
            <div className="bottom-column-section">
              <h2>Design Tools:</h2>
              <h3>
                <ul>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>Photoshop</li>
                </ul>
              </h3>
            </div>
          </div>
          <div className="section-skills-column">
            <div className="top-column-section">
              <SiUnity
                className="section-skills-column-icon"
                size={70}
                color="#332A99;"
              />
              <h2>Unity Developer</h2>
              <h3>
                I value clean, organized, and easy to maintain code.
              </h3>
            </div>
            <div className="middle-column-section">
              <h2>Things I enjoy working with:</h2>
              <h3>Scripting, 3D-Modelling, Lighting, shading, Animation</h3>
            </div>
            <div className="bottom-column-section">
              <h2>Design Tools:</h2>
              <h3>
                <ul>
                  <li>Unity</li>
                  <li>Visual Studio</li>
                  <li>Maya</li>
                  <li>Blender</li>
                  <li>Substance Painter</li>
                  <li>Photoshop</li>
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
