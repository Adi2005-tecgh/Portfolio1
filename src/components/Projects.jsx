import React from "react";

const projects = [
  {
    title: "Hearing Impairment Assistant – Speech to Sign Language Translator",
    description:
      "Built a real-time Python application that converts spoken English to Indian Sign Language (ISL) using SpeechRecognition, Tkinter, and PIL.",
    tags: ["Python", "SpeechRecognition", "Tkinter", "PIL", "OpenCV"],
    image: "/Project1.png",
  },
  {
    title: "Blood Pressure Stage Prediction using Machine Learning",
    description:
      "Developed a machine learning model to classify blood pressure stage using multiple ML algorithms and SMOTE-balanced datasets.",
    tags: ["Python", "Machine Learning", "Data Preprocessing", "Model Evaluation"],
    image: "/Project2.png",
  },
  {
    title: "Scoliosis Cobb Angle Detection using AIML",
    description:
      "Implemented a CNN-based model to detect spinal curvature and compute Cobb Angle for scoliosis diagnosis.",
    tags: ["CNN", "Computer Vision", "Medical AI", "PyTorch"],
    image: "/Project3.png",
  },
  {
    title: "Stock Market Index Price Prediction using AIML",
    description:
      "LSTM-based time series forecasting model to predict stock index movements using historical data.",
    tags: ["AI/ML", "LSTM", "Time Series", "Python"],
    image: "/Project4.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-projects container">
      <div className="section-head">
        <h2>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="grid-cards">
        {projects.map((p, i) => (
          <div key={i} className="card project-card">

            {/* Project Thumbnail */}
            <div className="project-image-wrapper">
              <img src={p.image} alt={p.title} className="project-image" />
            </div>

            {/* Content */}
            <div className="card-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="muted">{p.description}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <button
                className="btn btn-outline btn-small project-button"
                onClick={() => alert(`${p.title}\n\n${p.description}`)}
              >
                More Details
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
