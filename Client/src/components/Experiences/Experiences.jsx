import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { experiences } from "../../data/resume.data";
import "./Experiences.css";

export default function Experiences() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            Experience
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div
                className={`experience-card ${expandedId === exp.id ? "expanded" : ""}`}
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                <div className="experience-header">
                  <div className="experience-info">
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                  <div className="experience-period">{exp.period}</div>
                  <FiChevronDown className={`chevron ${expandedId === exp.id ? "rotated" : ""}`} />
                </div>

                {expandedId === exp.id && (
                  <div className="experience-details">
                    <ul className="highlights-list">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
