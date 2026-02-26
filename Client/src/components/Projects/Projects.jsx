import React, { useEffect, useState } from "react";
import "./Projects.css";
import watchball from "../../assets/Home/Wb.png";
import Agrolugue from "../../assets/Home/agrolugue.png";
import Vtmh from "../../assets/Home/vtmh.png";
import GameSessionGG from "../../assets/Home/play.png";
import operately from "../../assets/Home/operately.png";
import useEmblaCarousel from "embla-carousel-react";
import MiningAI from "../../assets/Home/miningAi.png";
import To_Do_List from "../../assets/Home/to_do_list.png";

import projectsData from "../../data/personal_projects.json";

import { PiBracketsRoundBold } from "react-icons/pi";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const imageMap = {
    GameSessionGG,
    operately,
    Vtmh,
    watchball,
    Agrolugue,
    MiningAI,
    To_Do_List,
    github: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);
  return (
    <section className="mainContent d-flex flex-column justify-content-center">
      <div className="d-flex mb-4">
        <strong className="highlighted-text h3">professional_projects</strong>
        <strong className="h3">
          <PiBracketsRoundBold />
        </strong>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`embla__slide ${
                selectedIndex === project.id ? "active" : "inactive"
              }`}
            >
              <div className="card-project">
                <strong className="logo">{project.logo}</strong>
                <h2 className="title">{project.title}</h2>
                <img
                  src={imageMap[project.image]}
                  alt={project.alt}
                  className="project"
                />
                <div className="button-right">
                  <a href={project.url} target="_blank">
                    {project.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
