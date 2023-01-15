import { Fade, Slide } from "react-awesome-reveal";

export default function Project() {
  return (
    <div id="projects" className="section-projects">
      <h1 className="projects-title">Senaste Projekt</h1>
      <div className="project-container">
      <Fade triggerOnce="false" direction="up">
        <div className="project">
          <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/pzzgsixachckpcdpdnvl.avif"></img>
          <h1>Hags Design 3D - AR Konfigurator</h1>

          <p>
            App för HAGS som låter användare bygga och beställa anpassningsbara
            konstellationer i Augmented Reality. HAGS Design 3D finns på Google
            Play och App Store.
          </p>
          <a
            href="https://hags.se/sv-se/hags-design-3d"
            target="_blank"
            rel="noreferrer"
          >
            <button>Läs mer...</button>
          </a>
        </div>
        </Fade>
        <Fade triggerOnce="false" direction="up">
        <div className="project">
          <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/PlunderingScene5Quest.jpg"></img>
          <h1>Plundring - VR utställning</h1>
          <p>
            Omvandling av fysisk utställning till VR-upplevelse. Plundring –
            början på ett folkmord handlar om tyska nazisters plundring av konst
            och litteratur i Europa. Appen finns för Oculus Quest.
          </p>
          <a
            href="https://www.levandehistoria.se/utstallningar/plundring/plundring-vr"
            target="_blank"
            rel="noreferrer"
          >
            <button>Läs mer...</button>
          </a>
        </div>
        </Fade>
      </div>
    </div>
  );
}
