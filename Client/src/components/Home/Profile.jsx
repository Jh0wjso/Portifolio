import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <section>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <span className="primary-text h4">
                Hello, i am <br />
              </span>
              <h1 className="highlighted-text"> {"<"} Jhonatan <br /> Silverio {"/>"} </h1>
            </div>

            <div className="profile-details-role p-3">
              <span className="primary-text">
                <h1>
                  {"Software Engineer"}
                </h1>
                <section className="d-flex">
                <span className="d-flex">
                  <h1 className="h1">+03</h1>
                  <span className="w-50 ml-1" style={{color: "#b1b1b1", fontWeight: "bold"}}>years of experience </span>
                </span>
                <span className="d-flex">
                  <h1 className="h1">+10</h1>
                  <span className="w-50 ml-1" style={{color: "#b1b1b1", fontWeight: "bold"}}>projects completed</span>
                </span>
                </section>
              </span>
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
