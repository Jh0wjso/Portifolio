import React from "react";
import "./Projects.css";

import watchball from "../../assets/Home/Wb.png";
import Agrolugue from "../../assets/Home/agrolugue.png";
import Vtmh from "../../assets/Home/vtmh.png";
import GameSessionGG from "../../assets/Home/play.png";
import operately from "../../assets/Home/operately.png";

import { PiBracketsRoundBold } from "react-icons/pi";

export default function Projects() {
  return (
    <section className="mainContent d-flex justify-content-center">
      <div className="d-flex">
        <strong className="highlighted-text h3">professional_projects</strong>
        <strong className="h3">
          <PiBracketsRoundBold />
        </strong>
      </div>
      <div className="projects d-flex justify-content-center">
        <div className="card-project">
          <strong className="logo">Ongoing</strong>
          <h2 className="title">GameSession.gg</h2>
          <img
            src={GameSessionGG}
            alt="BMI-Calculator-logo"
            className="project"
          />
          <div className="button-right">
            <a href="https://www.gamesession.gg/" target={"_blank"}>
              Website
            </a>
          </div>
        </div>
        <div className="card-project">
          <strong className="logo">Contribution</strong>
          <h2 className="title">Operately</h2>
          <img src={operately} alt="coinCotation-logo" className="project" />
          <div className="button-right">
            <a href="https://github.com/Jh0wjso/operately" target={"_blank"}>
              Repository
            </a>
          </div>
        </div>
        <div className="card-project">
          <strong className="logo">In coming soon</strong>
          <h2 className="title">VittaMaisHub</h2>
          <img src={Vtmh} alt="study-platform-logo" className="project" />
          <div className="button-right">
            <a href="https://vtmh-app.vercel.app/" target="_blank">
              Website
            </a>
          </div>
        </div>
      </div>
      <div className="projects d-flex justify-content-center">
        <div className="card-project">
          <strong className="logo">Finished</strong>
          <h2 className="text-center">WatchBall</h2>
          <img src={watchball} alt="watchball-logo" className="project" />
          <div className="button-right">
            <a href="https://watchball.vercel.app/" target={"_blank"}>
              Website
            </a>
          </div>
        </div>
        <div className="card-project">
          <strong className="logo">Finished</strong>
          <h2 className="title">Agrolugue</h2>
          <img src={Agrolugue} alt="Agrolugue-logo" className="project" />
          <div className="button-right">
            <a
              href="https://github.com/Jh0wjso/Geniuscon2022"
              target={"_blank"}
            >
              Repository
            </a>
          </div>
        </div>
        <div className="card-project">
          <strong className="logo">My GitHub</strong>
          <h2 className="title">Jh0wjso</h2>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
            alt="study-platform-logo"
            className="project"
          />
          <div className="button-right">
            <a href="https://github.com/Jh0wjso" target="_blank">
              Take a look
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
