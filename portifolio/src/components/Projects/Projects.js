import React from "react";
import "./Projects.css";
import watchball from '../../assets/Home/watchball.png';
import Agrolugue from "../../assets/Home/agrolugue.png";
import styudyplatform from "../../assets/Home/styudyplatform.png";
import BMI_Calculator from "../../assets/Home/BMI-Calculator.png";
import CoinCotation from "../../assets/Home/CoinCotation.jpeg";
import Stylos from "../../assets/Home/Stylos.png";

import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Projects(){
    
    function alerta(){
        const MySwal = withReactContent(Swal);
        return(
            MySwal.fire({
                title: <p>Esse projeto ainda esta em produçao.</p>,
                onOpen: () => {
                  setTimeout(() => MySwal.clickConfirm(), 2500);
                }
              })
        );
    }

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
                    <strong className="logo">Em Produçao</strong>
                    <h2 className="title">CoinCotation</h2>
                    <img src={CoinCotation} alt="coinCotation-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://github.com/Jh0wjso/CoinCotation-V2" target={"_blank"}>Repositório</a>
                    </div>
                </div>
                <div className="card-project">
                    <strong className="logo">Em Produçao</strong>
                    <h2 className="title">Stylos</h2>
                    <img src={Stylos} alt="Stylos-logo" className="project"/>
                    <div className="button-right">
                        <a onClick={() => {alerta()}}>EM BREVE</a>
                    </div>
                </div>
            </div>
            <div className="projects d-flex justify-content-center">
                <div className="card-project">
                    <strong className="logo">Ignite Lab</strong>
                    <h2 className="title">Study</h2>
                    <img src={styudyplatform} alt="study-platform-logo" className="project"/>
                    <div className="button-right">
                        <a href="https://github.com/Jh0wjso/Ignite_Lab" target={"_blank"}>Repositório</a>
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
                    <strong className="logo">Em Breve</strong>
                    <h2 className="title">Agrolugue</h2>
                    <img src={Agrolugue} alt="Agrolugue-logo" className="project"/>
                    <div className="button-right">
                        <a onClick={() => {alerta()}}>Em Breve</a>
                    </div>
                </div>
            </div>
        </section>
    );
}