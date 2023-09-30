import { TechnologiesData } from "../../data/Technologies.data";
import "./Technologies.css";
import React from "react";

export default function Technologies() {
  return (
    <section className="content-background container d-flex flex-column">
      <h1 className="font-weight-bold highlight-text text-center">
        Competências.
      </h1>
      <div className="d-flex flex-wrap justify-content-center">
        {TechnologiesData.map((item) => (
          <div className="w-25 item-tec text-center d-flex flex-column justify-content-center align-items-center">
            <svg
              className="p-2 mb-1 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-filetype-html"
              viewBox="0 0 16 16"
            >
              <path d={item.iconPath} />
            </svg>
            <strong>{item.tittle}</strong>
            <small>{item.subtitle}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
