import "./ContactMe.css";
import React from "react";

export default function ContactMe() {
  return (
    <section class="contact-content rounded container">
      <section class="p-3">
        <h2 class="text-center font-weight-bold h1 py-5">Contact Me</h2>
        <ul class="list-unstyled contact-list">
          <a
            href="https://wa.me/5514997981721?text=Hello%20Jhonatan"
            className="text-white"
            target="_blank"
          >
            <li className="contact-item">
              <i class="fa fa-phone fa-2x mt-4 blue-text"></i>
              <p>+55 14 997981721</p>
            </li>
          </a>

          <a
            href="mailto:jhonatansilverio1258@gmail.com"
            className="text-white"
            target="_blank"
          >
            <li className="contact-item">
              <i class="fa fa-envelope fa-2x mt-4 blue-text"></i>
              <p className="text-center my-email">
                jhonatansilverio1258@gmail.com
              </p>
            </li>
          </a>
        </ul>
      </section>
    </section>
  );
}
