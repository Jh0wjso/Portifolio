import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { personalInfo } from "../../data/resume.data";
import "./Profile.css";

export default function Profile() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Welcome to my portfolio</p>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
            </h1>
            <p className="hero-subtitle">{personalInfo.title}</p>
            <p className="hero-description">{personalInfo.description}</p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{personalInfo.yearsOfExperience}+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">{personalInfo.projectsCompleted}+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card">
              <span className="code-bracket">&lt;</span>
              <div className="card-content">
                <p className="card-title">Site Reliability Engineer</p>
                <p className="card-tech">React • Node.js • AWS</p>
              </div>
              <span className="code-bracket">/&gt;</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <FiArrowDown className="arrow-icon" />
        </div>
      </div>
    </section>
  );
}
