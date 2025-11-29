import React from "react";

const interests = [
  { title: "AI & Machine Learning" },
  { title: "Deep Learning" },
  { title: "Computer Vision" },
  { title: "Natural Language Processing" },
];

const skills = [
  "Python", "TensorFlow", "Keras", "PyTorch", "Scikit-Learn",
  "Django", "React", "Express", "SQL", "MongoDB",
  "NumPy", "Pandas"
];

export default function About() {
  return (
    <section id="about" className="section section-about container">
      <div className="section-head">
        <h2>
          About{" "}
          <span className="gradient-text">
            Me
          </span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="about-grid">
        {/* Profile */}
        <div className="glass profile-card">
          <img
            src="/Photo.jpg"
            alt="Profile"
            className="profile-circle"
          />
          <p className="muted profile-caption">Profile Photo</p>
        </div>

        {/* Right Section */}
        <div>
          <h3>Third-Year B.Tech Student</h3>

          <p className="muted">
            Specializing in{" "}
            <strong className="accent-text">
              Artificial Intelligence and Machine Learning
            </strong>. Passionate about building intelligent systems that create real-world impact.
          </p>

          <h4>My Interests</h4>
          <div className="interests">
            {interests.map((it) => (
              <div key={it.title} className="card small-card">
                {it.title}
              </div>
            ))}
          </div>

          <h4>Technical Skills</h4>
          <div className="skills-row" style={{ marginTop: 12 }}>
            {skills.map((s) => (
              <span key={s} className="skill-pill">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
