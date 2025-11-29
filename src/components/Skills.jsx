import React from "react";

const skillGroups = [
  {
    title: "AI & Machine Learning",
    items: [
      { name: "Machine Learning", pct: 90 },
      { name: "Deep Learning", pct: 85 },
      { name: "Computer Vision", pct: 80 },
      { name: "NLP", pct: 75 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "TensorFlow", pct: 85 },
      { name: "PyTorch", pct: 80 },
      { name: "Keras", pct: 90 },
      { name: "Scikit-Learn", pct: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-skills container">
      <div className="section-head">
        <h2>
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="skills-grid no-chart">
        <div className="skills-list-col">
          {skillGroups.map((group) => (
            <div key={group.title} className="card skills-group-card">
              <h3 className="skills-group-title">{group.title}</h3>

              <div className="skills-list">
                {group.items.map((it) => (
                  <div key={it.name} className="skill-row">
                    <div className="skill-row-left">
                      <span className="skill-name">{it.name}</span>
                      <span className="skill-pct">{it.pct}%</span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${it.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
