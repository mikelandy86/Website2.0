import { IoMdSchool } from "react-icons/io";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
export default function SkillSection() {
  return (
    <div id="skills" className="section-skills">
      <div className="section-bio-title">
        <h1>
          <IoMdSchool size={35} /> Mina <h1>Kompetenser</h1>
        </h1>
      </div>
      <div className="section-skills-flexrow">
        <div id="blockA" className="section-bio-skills-container">
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
        </div>
      </div>
    </div>
  );
}
