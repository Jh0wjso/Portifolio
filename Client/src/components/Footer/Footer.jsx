import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Jhonatan Silvério</h3>
            <p className="footer-description">
              Site Reliability Engineer | Full Stack Developer | Cloud Architect
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Social</h4>
            <ul className="footer-links">
              <li><a href="https://linkedin.com/in/jhonatansilverio" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/Jh0wjso" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:jhonatansilverio1258@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Jhonatan Silvério. All rights reserved.
          </p>
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FiArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}