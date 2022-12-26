export default function Project() {
  return (
    <div className="section-projects">
      <h1 className="projects-title">Senaste Projekt</h1>
      <h3 className="projects-subtitle">
        Plattformar – Appstore / Google Play / AppLab
      </h3>
      <div className="project-container">
        <div className="project">
          <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/pzzgsixachckpcdpdnvl.avif"></img>
          <h1>Hags Design 3D - AR Konfigurator</h1>

          <p>
            Få ordning på allt från projekt till bokningar, automatisera
            komplexa ärenden och effektivisera arbetsflöden och processer. Allt
            i ett och samma system.
          </p>
          <a
            href="https://hags.se/sv-se/hags-design-3d"
            target="_blank"
            rel="noreferrer"
          >
            <button>Läs mer om projektet...</button>
          </a>
        </div>
        <div className="project">
          <img src="./src/assets/public/images/PlunderingScene5Quest.jpg"></img>
          <h1>Plundring - VR utställning</h1>
          <p>
            Transformation sker överallt, oavsett bransch. Upptäck hur Multisoft
            levererar anpassningsbara systemlösningar helt anpassade efter varje
            bransch.
          </p>
          <a
            href="https://www.levandehistoria.se/utstallningar/plundring/plundring-vr"
            target="_blank"
            rel="noreferrer"
          >
            <button>Läs mer om projektet...</button>
          </a>
        </div>
      </div>
    </div>
  );
}
