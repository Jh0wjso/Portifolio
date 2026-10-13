import React from "react";
import {
  programmingLanguages,
  frontendTechs,
  backendTechs,
  cloudDevOpsTechs,
} from "../../data/resume.data";
import "./Technologies.css";

export default function Technologies() {
  const techSections = [
    { title: "Programming Languages", techs: programmingLanguages },
    { title: "Frontend", techs: frontendTechs },
    { title: "Backend", techs: backendTechs },
    { title: "Cloud & DevOps", techs: cloudDevOpsTechs },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            Skills
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="tech-grid">
          {techSections.map((section) => (
            <div key={section.title} className="tech-category">
              <h3 className="category-title">{section.title}</h3>
              <div className="tech-icons">
                {section.techs.map((tech) => (
                  <div key={tech.name} className="tech-icon-wrapper" title={tech.name}>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="tech-icon"
                      loading="lazy"
                    />
                    <span className="tech-name">{tech.name}</span>
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
