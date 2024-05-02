import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import "./AboutMe.css";
import { HiCodeBracket } from "react-icons/hi2";
import { RiBracesLine } from "react-icons/ri";
import { PiBracketsRoundBold } from "react-icons/pi";

export default function AboutMe() {
  return (
    <main className="aboutMe" id="#aboutMe">
      <div className="aboutMeContent">
        <div className="whoAmI">
          <strong className="highlight-text text-center">About Me</strong>
          <div className="d-flex">
            <strong className="highlighted-text h3">aboutMe</strong>
            <strong className="h3"><PiBracketsRoundBold /></strong>
          </div>
          <p className="aboutMeText">
            I have been studying software development since 2019 and working as
            a freelancer for over a year, with web applications I have already
            developed some web applications for physical stores that did not
            have WEB applications, and Landing Pages for other businesses and
            always concerned about the user experience and using data metrics to
            achieve high retention rates I have already created four mobile
            applications, my specialties are React, React Native, JavaScript,
            TailwindCSS, NextJs, NestJS, PHP.
          </p>
        </div>
        <div className="my-picture">
          <section className="card">
            <div className="d-flex flex-column mr-5">
              <strong>Front-end Developer</strong>
              <a href="#projects" className="linkCard">Projects</a>
            </div>
            <HiCodeBracket  size={50} />
          </section>
          <section className="card">
            <div className="d-flex flex-column mr-5">
              <strong>Contact me</strong>
              <a href="#contact" className="linkCard">Hire me!</a>
            </div>
            <RiBracesLine size={50} />
          </section>
        </div>
      </div>
    </main>
  );
}
