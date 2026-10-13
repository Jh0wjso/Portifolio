import React from "react";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";
import { personalInfo } from "../../data/resume.data";
import "./ContactMe.css";

export default function ContactMe() {
  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      action: "Send Email",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `https://wa.me/5514997981721?text=Hello%20Jhonatan`,
      action: "Send Message",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin,
      action: "View Profile",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "See my work",
      href: personalInfo.github,
      action: "View Profile",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            Get In Touch
            <span className="title-bracket">/&gt;</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">
          <div className="contact-message">
            <p className="contact-intro">
              I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="contact-grid">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="contact-label">{method.label}</h3>
                  <p className="contact-value">{method.value}</p>
                  <span className="contact-action">{method.action}</span>
                </a>
              );
            })}
          </div>

          <div className="contact-footer">
            <p className="footer-text">
              Looking forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
