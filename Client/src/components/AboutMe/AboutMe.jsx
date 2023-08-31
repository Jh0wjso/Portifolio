import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <main className="aboutMe" id="#aboutMe">
      <div className="aboutMeContent container">
        <div className="my-picture">
          <div className="picture-background"></div>
        </div>

        <div className="whoAmI">
          <strong className="highlight-text text-center">Sobre mim</strong>
          <strong>Oi, como vai?</strong>
          <p className="aboutMeText">
            É ótimo ver você aqui! Desde 2019, venho estudando e desenvolvendo software enquanto trabalho em aplicações web para diversos setores. 
            Meu foco é oferecer soluções inovadoras e eficientes para empresas que desejam ter presença online. 
            Também desenvolvi aplicações web para lojas físicas para ampliar seu alcance e oferecer uma experiência de compra integrada aos seus clientes. 
            Atualmente estou cursando Ciência da Computação e criei quatro aplicativos mobile para ampliar meu portfólio e aprofundar meus conhecimentos. 
            Minha experiência me proporcionou amplo conhecimento em programação web e mobile, design de interface e experiência do usuário, 
            além de uma visão atualizada do mercado de tecnologia. Estou sempre em busca de novos desafios e oportunidades para me desenvolver ainda 
            mais neste campo fascinante e em constante evolução.
          </p>
        </div>
      </div>
    </main>
  );
}
