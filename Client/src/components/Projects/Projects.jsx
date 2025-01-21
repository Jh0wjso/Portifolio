import React from "react";
import "./Projects.css";

import watchball from "../../assets/Home/Wb.png";
import Agrolugue from "../../assets/Home/agrolugue.png";
import WbH from "../../assets/Home/Logo2.png";
import BMI_Calculator from "../../assets/Home/BMI-Calc.png";
import CoinCotation from "../../assets/Home/logo.png";
import Stylos from "../../assets/Home/Stylos.png";

import { PiBracketsRoundBold } from "react-icons/pi";

export default function Projects() {
  return (
    <section className="mainContent d-flex justify-content-center">
      <div className="d-flex">
        <strong className="highlighted-text h3">personal_projects</strong>
        <strong className="h3">
          <PiBracketsRoundBold />
        </strong>
      </div>
      <div className="projects d-flex justify-content-center">
        <div className="card-project">
          <strong className="logo">Finished</strong>
          <h2 className="text-center">WatchBall</h2>
          <img src={watchball} alt="watchball-logo" className="project" />
          <div className="button-right">
            <a href="https://watchball.vercel.app/" target={"_blank"}>
              Site
            </a>
          </div>
        </div>
        <div className="card-project">
          <strong className="logo">In Building</strong>
          <h2 className="title">PremNews</h2>
          <img src={CoinCotation} alt="coinCotation-logo" className="project" />
          <div className="button-right">
            <a href="https://prem-news.vercel.app/" target={"_blank"}>
              Site
            </a>
          </div>
        </div>
        <div className="card-project">
          <strong className="logo">In Building</strong>
          <h2 className="title">WannabeHealth</h2>
          <img src={WbH} alt="study-platform-logo" className="project" />
          <div className="button-right">
            <a href="https://github.com/Jh0wjso/WbH" target="_blank">
              In coming soon
            </a>
          </div>
        </div>
      </div>
      <div className="projects d-flex justify-content-center">
        <div className="card-project">
          <strong className="logo">Finished</strong>
          <h2 className="title">BMI-Calc</h2>
          <img
            src={BMI_Calculator}
            alt="BMI-Calculator-logo"
            className="project"
          />
          <div className="button-right">
            <a href="https://github.com/Jh0wjso/JSO_HEALTH" target={"_blank"}>
              Repository
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
