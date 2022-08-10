import React from "react";
import "./Projects.css";
import watchball from '../../assets/Home/watchball.png';
import portifolio from "../../assets/Home/portifolio.png";

export default function Projects(){
    return(
        <div className="mainContent container d-flex justify-content-center">
            <h1>Projetos</h1>
            <div className="projects d-flex justify-content-center">
                <div className="card-project">
                    <strong className="logo">JSO</strong>
                    <h2 className="text-center">WatchBall</h2>
                    <img src={watchball} alt="watchball-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://watchball.netlify.app/" target={"_blank"}>Site</a>
                    </div>
                </div>
                <div className="card-project">
                    <strong className="logo">JSO</strong>
                    <h2 className="title">CoinCotation</h2>
                    <img src={watchball} alt="coinCotation-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://github.com/Jh0wjso/CoinCotation" target={"_blank"}>Repositório</a>
                    </div>
                </div>
                <div className="card-project">
                    <strong className="logo">JSO</strong>
                    <h2 className="title">Stylos</h2>
                    <img src={watchball} alt="Stylos-logo" className="project"/>
                    <div className="button-right">
                        <a href="index.html">EM BREVE</a>
                    </div>
                </div>
            </div>
            <div className="projects d-flex justify-content-center">
                <div className="card-project">
                    <strong className="logo">JSO</strong>
                    <h2 className="title">Study</h2>
                    <img src={watchball} alt="study-platform-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://github.com/Jh0wjso/Ignite_Lab" target={"_blank"}>Repositório</a>
                    </div>
                </div>
                <div className="card-project">
                    <strong className="logo">JSO</strong>
                    <h2 className="title">BMI-Calc</h2>
                    <img src={watchball} alt="BMI-Calculator-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://github.com/Jh0wjso/JSO_HEALTH" target={"_blank"}>Repositório</a>
                    </div>
                </div>
                <div className="card-project">
                    <strong className="logo">JSO</strong>
                    <h2 className="title">Portifolio</h2>
                    <img src={portifolio} alt="portifolio-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://github.com/Jh0wjso/Portifolio" target={"_blank"}>Repositório</a>
                    </div>
                </div>
            </div>
        </div>
    );
}