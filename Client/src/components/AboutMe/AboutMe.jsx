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
            <strong className="h3">
              <PiBracketsRoundBold />
            </strong>
          </div>
          <p className="aboutMeText">
            I have been studying software development since 2019 and have worked
            as a freelancer for over a year, building web applications for local
            businesses and developing landing pages focused on user experience
            and data-driven optimization to achieve high engagement and
            retention. I have also developed four mobile applications and gained
            solid experience across frontend, backend, and API integration.
            <br /> My technical background includes React, React Native,
            JavaScript, TailwindCSS, Next.js, NestJS, and PHP. In recent years,
            I expanded my expertise into cloud and distributed systems, which
            led me to earn the AWS Solutions Architect – Associate (SAA-C03)
            certification. This certification validates my ability to design
            secure, scalable, and high-performance architectures using AWS
            services.
          </p>
        </div>
        <div className="my-picture">
          <section className="card">
            <div className="d-flex flex-column mr-5">
              <strong>Software Engineer</strong>
              <a href="#projects" className="linkCard">
                Projects
              </a>
            </div>
            <HiCodeBracket size={50} />
          </section>
          <section className="card">
            <div className="d-flex flex-column mr-5">
              <strong>Contact me</strong>
              <a href="#contact" className="linkCard">
                Hire me!
              </a>
            </div>
            <RiBracesLine size={50} />
          </section>
        </div>
      </div>
    </main>
  );
}
