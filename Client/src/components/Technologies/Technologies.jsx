import { TechnologiesData } from "../../data/Technologies.data";
import "./Technologies.css";
import React from "react";
import { PiBracketsRoundBold } from "react-icons/pi";

export default function Technologies() {
  return (
    <section className="content-background d-flex flex-column">
      <div className="d-flex">
        <strong className="highlighted-text h3">skills</strong>
        <strong className="h3">
          <PiBracketsRoundBold />
        </strong>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {TechnologiesData.map((item) => (
          <div className="w-25 item-tec1 d-flex justify-content-center align-items-center">
            <img
              src={item.iconPath}
              alt="JavaScript"
              width={75}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
