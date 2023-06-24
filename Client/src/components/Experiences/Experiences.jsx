import React from "react";
import "./Experiences.css";

export default function Experiences() {
  return (
    <section className="content-background2 container d-flex flex-column">
      <h1 className="font-weight-bold highlight-text text-center">
        Experiências
      </h1>
      <div className="content">
        <div className="item-tec text-center d-flex flex-column justify-content-center align-items-center">
          <svg
            className="p-2 mb-1 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-filetype-html"
            viewBox="0 0 16 16"
          >
            <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
            <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z" />
          </svg>
          <strong style={{ fontSize: 25 }}>Estagiário AITEC</strong>
          <small>
            O estagiário na AITEC da UENP foi responsável pela manutenção e
            desenvolvimento do site da agência, usando Joomla. Ele lidou com um
            grande volume de informações e demandas dos usuários. Também
            realizou modelagem 3D de peças, cortes a laser e integração de
            componentes tecnológicos. Essa experiência aprimorou suas
            habilidades em tecnologia, trabalho em equipe e enfrentamento de
            desafios, contribuindo para projetos de impacto na área.
          </small>
        </div>
        <div className="item-tec text-center d-flex flex-column justify-content-center align-items-center">
          <svg
            className="p-2 mb-1 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-filetype-html"
            viewBox="0 0 16 16"
          >
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>
          <strong style={{ fontSize: 25 }}>Estagiário CSG International</strong>
          <small>
            O estagiário trabalha em uma empresa multinacional, desenvolvendo
            soluções internas inovadoras usando várias tecnologias, como C#,
            .NET, ASP.NET, PHP, ReactJS, TypeScript e NextJS. Ele está envolvido
            em todas as etapas do ciclo de vida do software, colaborando com
            desenvolvedores sêniores e arquitetos. Além disso, ele precisa ter
            habilidades de comunicação em inglês, pois interage com pessoas de
            diferentes países.
          </small>
        </div>
      </div>
    </section>
  );
}
