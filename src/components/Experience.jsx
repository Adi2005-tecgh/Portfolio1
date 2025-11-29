import React from "react";

const experiences = [
  {
    title: "AI & Cloud Intern",
    org: "Edunet Foundation",
    date: "15 Jul 2025 – 07 Aug 2025",
    desc: "Worked with IBM SkillsBuild & IBM Cloud. Built cloud-based AI solutions and completed hands-on virtual projects.",
    achievement: "Internship",
  },
  {
    title: "AI & ML Intern (ELP Program)",
    org: "SmartBridge",
    date: "16 Jun 2025 – 05 Aug 2025",
    desc: "Worked on ML tasks including preprocessing, model building and evaluation using Python and ML libraries.",
    achievement: "Internship",
  },
  {
    title: "Artificial Intelligence Intern",
    org: "Eisystems",
    date: "25 Jun 2024 – 24 Jul 2024",
    desc: "Built 'Survival Analysis of Passengers' ML model and gained experience in data analysis and evaluation.",
    achievement: "Internship",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section-experience container">

      {/* Header */}
      <div className="section-head">
        <h2>
          Experience &{" "}
          <span
            className="gradient-purple"
            style={{
              background: "linear-gradient(90deg,#06b6d4,#7c3aed)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Achievements
          </span>
        </h2>

        <div className="section-divider" />
      </div>

      {/* Timeline */}
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />

            {/* Replaced <Card> with plain div */}
            <div className="card timeline-card">
              <h3>
                {exp.title} — <strong>{exp.achievement}</strong>
              </h3>

              <p className="muted">
                {exp.org} • {exp.date}
              </p>

              <p style={{ marginTop: 8 }}>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
