export default function HeroSection() {
  const video = document.querySelector("video");

  // Slow it to 50% speed
  video.playbackRate = 0.2;

  return (
    <div className="section-hero-section">
      <video autoplay muted loop id="myVideo" autoPlay={true}>
        <source src="src/assets/public/images/4K_44.mp4" type="video/mp4" />
      </video>
      <div className="hero-section-row-flex">
        <div className="hero-section-info-section">
          <h2 className="hero-section-info-title">
            Mikael H–Landy{" "}
            <span class="rainbow">
              <br />
              XR-Utvecklare
            </span>
          </h2>
          <p className="hero-section-info-subtitle">
            C# - .NET - React - Unity - Maya
          </p>
          <p className="hero-section-info-desc">
            Utvecklar interaktiva applikationer och prototyper och gillar den
            kreativa processen, att tänka visuellt och att se idéer ta form och
            realiseras.
          </p>
          <p className="hero-section-info-button">
            <a>Kontakt</a>
          </p>
        </div>

        <div className="hero-section-image-section">
          {/* <div className="hero-section-image-image-bg"></div> */}
          <div className="hero-section-image">
            <iframe
              src="https://www.youtube.com/embed/H5PsBdyi2so?controls=0&showinfo=0&rel=0&autoplay=1&start=7&end=200&loop=1&mute=1&playlist=H5PsBdyi2so"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

// <iframe width="580" height="315"
// src="https://www.youtube.com/embed/nXUMsvWlsVo?autoplay=1&mute=1">
// </iframe>
