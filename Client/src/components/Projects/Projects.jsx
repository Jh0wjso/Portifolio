import React from "react";
import "./Projects.css";

import watchball from '../../assets/Home/Wb.png';
import Agrolugue from "../../assets/Home/agrolugue.png";
import WbH from "../../assets/Home/Logo2.png";
import BMI_Calculator from "../../assets/Home/BMI-Calc.png";
import CoinCotation from "../../assets/Home/CoinCotation.jpeg";
import Stylos from "../../assets/Home/Stylos.png";

export default function Projects(){
    return(
        <section className="mainContent container d-flex justify-content-center">
            <h1 className="font-weight-bold highlight-text text-center">Projetos</h1>
            <div className="projects d-flex justify-content-center">
                <div className="card-project">
                    <strong className="logo">Finalizado</strong>
                    <h2 className="text-center">WatchBall</h2>
                    <img src={watchball} alt="watchball-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://watchball.netlify.app/" target={"_blank"}>Site</a>
                    </div>
                </div>
                <div className="card-project">
                    <strong className="logo">Em Produção</strong>
                    <h2 className="title">CoinCotation</h2>
                    <img src={CoinCotation} alt="coinCotation-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://github.com/Jh0wjso/Coin-Cotation-App" target={"_blank"}>Repositório</a>
                    </div>
                </div>
                <div className="card-project">
                    <strong className="logo">Finalizado</strong>
                    <h2 className="title">Web Store</h2>
                    <img src={Stylos} alt="Stylos-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://stylos.vercel.app/" target={"_blank"}>Site</a>
                    </div>
                </div>
            </div>
            <div className="projects d-flex justify-content-center">
                <div className="card-project">
                    <strong className="logo">WbH</strong>
                    <h2 className="title">Wanna be Health</h2>
                    <img src={WbH} alt="study-platform-logo" className="project"/>
                    <div className="button-right">
                    <a onClick={() => {}}>EM BREVE</a>
                    </div>
                </div>
                <div className="card-project">
                    <strong className="logo">Finalizado</strong>
                    <h2 className="title">BMI-Calc</h2>
                    <img src={BMI_Calculator} alt="BMI-Calculator-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://github.com/Jh0wjso/JSO_HEALTH" target={"_blank"}>Repositório</a>
                    </div>
                </div>
                <div className="card-project">
                    <strong className="logo">Finalizado</strong>
                    <h2 className="title">Agrolugue</h2>
                    <img src={Agrolugue} alt="Agrolugue-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://github.com/Jh0wjso/Geniuscon2022" target={"_blank"}>Repositório</a>
                    </div>
                </div>
            </div>
        </section>
    );
}