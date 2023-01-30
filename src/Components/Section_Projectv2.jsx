import { Fade, Slide } from "react-awesome-reveal";
import { FaLaptopCode } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export default function Projectv2() {
  return (
    <div id="projects" className="section-projects">
      <div className="section-bio-title">
        <h1>My Recent Work</h1>
        <h3>
          Here are a few design projects I've worked on recently. Want to see
          more? <a>Email me.</a>
        </h3>
      </div>
      <div className="v2-projects-projectThumbs">
        <div className="v2-projects-flex-container">
          <div className="container">
            <img
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Hags_Project.png"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="v2-project-text">
                <h1>
                  AR app that visualizes outdoor furnitures with built-in
                  configurator.
                </h1>
                <a href="https://hags.se/sv-se/hags-design-3d" target="_blank">
                  Read more <FaAngleRight color="#fff" />
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <img
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Plundring_Project.png"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="v2-project-text">
                <h1>
                  AR app that visualizes outdoor furnitures with built-in
                  configurator.
                </h1>
                <a href="https://hags.se/sv-se/hags-design-3d" target="_blank">
                  Read more <FaAngleRight color="#fff" />
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <img
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/pexels-olia-danilevich-4974912.jpg"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="v2-project-text">
                <h1>
                  AR app that visualizes outdoor furnitures with built-in
                  configurator.
                </h1>
                <a href="https://hags.se/sv-se/hags-design-3d" target="_blank">
                  Read more <FaAngleRight color="#fff" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div id="projects" className="section-projects">
    //   <div className="section-bio-title">
    //     <h1>My Recent Work</h1>
    //     <h3>
    //       Here are a few past design projects I've worked on. Want to see more?{" "}
    //       <a>Email me.</a>
    //     </h3>
    //   </div>
    //   <div className="v2-projects-flex-container">
    //     <div className="v2-project">
    //       <div className="v2-project-container">
    //         <img src="./src/assets/public/images/Hags_Project.png"></img>
    //         <div className="overlay">
    //           <div className="text">Hello World</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
