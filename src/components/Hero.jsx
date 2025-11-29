import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="section section-hero">
      <div className="container hero-inner">

        <div className="hero-grid">
          
          {/* LEFT SIDE */}
          <div className="hero-left">
            <div className="badge">Third-Year B.Tech Student</div>

            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Aditya</span>
            </h1>

            <h2 className="hero-sub">AIML Engineer</h2>

            <p className="hero-lead">
              I build intelligent systems using AI, ML, and Deep Learning —
              focused on practical research and deployable prototypes.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="/resume.pdf" download>
                Download Resume
              </a>

              <button
                className="btn btn-outline"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                View Projects
              </button>
            </div>

            <div className="hero-links">
              <a href="https://github.com/Adi2005-tecgh" target="_blank" rel="noreferrer">GitHub</a>
              <span> · </span>
              <a href="https://www.linkedin.com/in/aditya-undefined-28ba75321/" target="_blank" rel="noreferrer">LinkedIn</a>
              <span> · </span>
              <a href="mailto:202301070175@mitaoe.ac.in">Email</a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-right">

            <div className="avatar avatar-large">
              <img
                src="/Photo.jpg"
                alt="Aditya profile"
                className="avatar-img"
              />
            </div>

            <div className="card mini-card">
              <div className="mini-title">Currently</div>
              <div className="muted">Third-Year B.Tech — AIML (MITAOE)</div>

              <div className="mini-skills" style={{ marginTop: 12 }}>
                <span className="skill-pill">Python</span>
                <span className="skill-pill">PyTorch</span>
                <span className="skill-pill">Computer Vision</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Hint */}
        <div style={{ marginTop: 18, textAlign: "center" }}>
          <button
            className="scroll-hint"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            ↓
          </button>
        </div>

      </div>
    </section>
  );
}
