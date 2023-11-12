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
            <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z" />
          </svg>
          <strong style={{ fontSize: 25 }}>Estagiário AITEC</strong>
          <small>
            Durante meu período como estagiário na AITEC da UENP, assumi a
            responsabilidade pela manutenção e desenvolvimento do site da
            agência, utilizando a plataforma Joomla. Durante essa experiência,
            lidei com um grande volume de informações e atendi às diversas
            demandas dos usuários. Além disso, tive a oportunidade de realizar
            modelagem 3D de peças, executar cortes a laser e integrar
            componentes tecnológicos. Essa vivência enriquecedora me permitiu
            aprimorar minhas habilidades em tecnologia, fortalecer minha
            capacidade de trabalho em equipe e desenvolver minha habilidade para
            enfrentar desafios de maneira eficaz. Minhas contribuições
            desempenharam um papel significativo em projetos impactantes na
            área.
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
            Eu trabalho em uma empresa multinacional, onde sou responsável pelo
            desenvolvimento de soluções internas inovadoras, fazendo uso de uma
            ampla gama de tecnologias, como C#, .NET, ASP.NET, PHP, ReactJS,
            TypeScript e NextJS. Minha função me envolve em todas as etapas do
            ciclo de vida do software, o que inclui colaboração constante com
            desenvolvedores sêniores e arquitetos experientes. Além disso, a
            comunicação em inglês é uma habilidade fundamental, uma vez que
            interajo com colegas de diferentes países e culturas. Essa
            experiência tem me permitido crescer profissionalmente, tanto em
            termos de desenvolvimento técnico quanto de competências
            interpessoais.
          </small>
        </div>
      </div>
    </section>
  );
}
