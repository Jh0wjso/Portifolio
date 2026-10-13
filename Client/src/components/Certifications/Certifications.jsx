import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { certifications } from "../../data/resume.data";
import "./Certifications.css";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certifications-section" id="certifications">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            Certifications
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="certs-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cert-card"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              <div className="cert-hover">View Details</div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedCert(null)}
            >
              <FiX size={28} />
            </button>
            <div className="modal-icon">{selectedCert.icon}</div>
            <h2 className="modal-title">{selectedCert.title}</h2>
            <p className="modal-issuer">{selectedCert.issuer}</p>
            <p className="modal-date">{selectedCert.date}</p>
            <p className="modal-description">{selectedCert.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
