import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personalInfo } from "../../data/resume.data";
import "./Header.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="header">
      <nav className="navbar-container">
        <div className="nav-content">
          <a href="#" className="logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">JS</span>
            <span className="logo-bracket">/&gt;</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-social">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
