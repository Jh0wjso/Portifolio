import React from "react";
import { FiCode, FiTarget, FiZap } from "react-icons/fi";
import { areasOfExpertise } from "../../data/resume.data";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            About Me
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a Site Reliability Engineer with a passion for building robust, scalable systems that power modern applications. With a background in both software engineering and cloud infrastructure, I specialize in designing distributed systems, implementing CI/CD pipelines, and optimizing cloud architectures.
            </p>
            <p className="about-paragraph">
              My journey started with a love for coding and has evolved into a deep understanding of how to build systems that not only work well but are also reliable, maintainable, and cost-effective. I thrive in cross-functional environments where I can collaborate with teams to solve complex technical challenges.
            </p>
            <p className="about-paragraph">
              When I'm not coding or architecting solutions, you can find me exploring new technologies, contributing to open-source projects, or helping fellow developers grow their skills.
            </p>
          </div>

          <div className="expertise-grid">
            {areasOfExpertise.map((area, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">
                  {index === 0 && <FiCode size={32} />}
                  {index === 1 && <FiTarget size={32} />}
                  {index === 2 && <FiZap size={32} />}
                  {index === 3 && <FiCode size={32} />}
                </div>
                <h3 className="expertise-title">{area.title}</h3>
                <p className="expertise-description">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
