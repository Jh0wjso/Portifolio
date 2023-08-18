import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <section>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz d-flex justify-content-center">
              <div className="colz-icon">
                <a
                  href="https://www.linkedin.com/in/jhonatansilverio/"
                  target={"_blank"}
                >
                  <i className="fa fa-linkedin-square text-white mr-4" />
                </a>
                <a
                  href="https://github.com/Jh0wjso"
                  target={"_blank"}
                >
                  <i className="fa fa-github-square text-white mr-4" />
                </a>
                <a
                  href="https://www.instagram.com/jhojso/"
                  target={"_blank"}
                >
                  <i className="fa fa-instagram text-white mr-4" />
                </a>
              </div>
            </div>

            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Opá, Tudo certo? Espero que sim! Prazer me chamo{" "}
                <span className="highlighted-text">Jhonatan</span>!
              </span>
            </div>

            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {"Desenvolvedor Front-end"}
                </h1>
                <span className="profile-role-tagline font-weight-bold">
                  Habilidades em front e back end.
                </span>
              </span>
            </div>
            <div className="profile-options container">
              <a
                href="https://wa.me/5514997981721"
                target={"_blank"}
              >
                <button className="btn primary-btn mb-1">
                  {""}
                  Me Contate{" "}
                </button>
              </a>

              <a href="Curriculo.pdf" download="Jhonatan Silverio.pdf">
                <button className="btn highlighted-btn">
                  Baixar Currículo
                </button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
