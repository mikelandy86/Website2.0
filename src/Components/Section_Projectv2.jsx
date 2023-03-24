import { Fade, Slide } from "react-awesome-reveal";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export default function Projectv2() {
  return (
    <div id="projects" className="section-projects">
      {/* <div className="section-bio-title">
      <Fade duration="2000" triggerOnce={true} >
        <h4>My Recent Work</h4>

        </Fade>
      </div> */}
              <div className="section-bio-title-contact">
          <h1>Recent Work</h1>
        </div>
      <div className="v2-projects-projectThumbs">
        <div className="v2-projects-flex-container">
        <Fade duration="2000" triggerOnce={true}  >
          <div className="container">
            <img
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/pzzgsixachckpcdpdnvl.avif"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="v2-project-text">
                <h1>
                  Visualize Outdoor Space Furniture with an AR Configurator App
                </h1>
                <a href="https://hags.se/sv-se/hags-design-3d" target="_blank">
                  Read more <FaAngleRight color="#fff" />
                </a>
              </div>
            </div>
          <div className="project-name-sub">
            <h1>Hags Design 3D</h1>
            </div>
          </div>
          </Fade>
          <Fade duration="2000" triggerOnce={true} >
          <div className="container">
            
            <img
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/pexels-polina-tankilevitch-4523095.jpg"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="v2-project-text">
                <h1>Travel Back in Time: A Virtual Reality World War 2 Exhibition"</h1>
                <a
                  href="https://www.levandehistoria.se/utstallningar/plundring/plundring-vr"
                  target="_blank"
                >
                  Read more <FaAngleRight color="#fff" />
                </a>
              </div>
            </div>
          </div>
          </Fade>
 
 
          {/* <Fade duration="2000" triggerOnce={true} direction="right" >
          <div className="container">
            <img
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/laptop-gccb97b73a_1920.jpg"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="v2-project-text-underdev">
                <h1>
                  Building a Responsive Website for a Dog Health Care Center
                  with React
                </h1>
                <a>Under developement</a>
              </div>
            </div>
          </div>
          </Fade> */}
        </div>
        
      </div>
      {/* <div className="v2-project-github-link">
        <a href="https://github.com/mikelandy86" target="_blank">
          <FaGithub size={20} className="githubIcon" /> See more on Github
        </a>
      </div> */}
    </div>

  );
}
