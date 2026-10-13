import React, { useState } from "react";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { projectsData } from "../../data/resume.data";
import "./Projects.css";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const currentProject = projectsData[currentIndex];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ongoing":
        return "status-ongoing";
      case "Completed":
        return "status-completed";
      case "In Development":
        return "status-dev";
      default:
        return "";
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            Projects
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-content">
          <div className="project-showcase">
            <div className={`project-card ${getStatusColor(currentProject.status)}`}>
              <div className="project-header">
                <span className={`project-status ${getStatusColor(currentProject.status)}`}>
                  {currentProject.status}
                </span>
              </div>

              <h3 className="project-title">{currentProject.title}</h3>
              <p className="project-description">{currentProject.description}</p>

              <div className="project-highlights">
                {currentProject.highlights.map((highlight, idx) => (
                  <span key={idx} className="highlight-tag">
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="project-technologies">
                {currentProject.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={currentProject.url} target="_blank" rel="noopener noreferrer" className="project-link">
                Visit Project
                <FiExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="projects-nav">
            <div className="projects-list">
              {projectsData.map((project, idx) => (
                <div
                  key={idx}
                  className={`project-nav-item ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <span className="nav-number">{String(idx + 1).padStart(2, "0")}</span>
                  <div className="nav-info">
                    <h4 className="nav-title">{project.title}</h4>
                    <p className="nav-status">{project.status}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-controls">
              <button onClick={prev} className="nav-btn" aria-label="Previous project">
                <FiChevronLeft size={24} />
              </button>
              <span className="carousel-indicator">
                {String(currentIndex + 1).padStart(2, "0")} / {String(projectsData.length).padStart(2, "0")}
              </span>
              <button onClick={next} className="nav-btn" aria-label="Next project">
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
