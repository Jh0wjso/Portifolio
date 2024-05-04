import "./ContactMe.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "portifolio_template",
        form.current,
        "dFAOjee8Q73lUpis4"
      )
      .then(
        () => {
          alert("Mensagem Enviada!");
        },
        () => {
          alert("Por problemas técnicos não conseguimos enviar sua mensagem!");
        }
      );

    e.target.reset();
  }

  return (
    <section class="contact-content rounded container">
      <section class="p-3">
        <h2 class="text-center font-weight-bold h1 py-5">Contact Me</h2>
        <div class="row">
          <div class="col-md-8 col-xl-9">
            <form ref={form} onSubmit={sendEmail}>
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form">
                    <input
                      placeholder="Ex. Jhonatan"
                      name="name"
                      type="text"
                      id="contact-name"
                      class="form-control"
                    />
                    <label for="contact-name" class="">
                      Your Name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form">
                    <input
                      name="e-mail"
                      placeholder="Ex. jhonatansilverio1258@gmail.com"
                      type="text"
                      id="contact-email"
                      class="form-control"
                    />
                    <label for="contact-email" class="">
                      Your e-mail
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <input
                      name="subject"
                      placeholder="Ex. Freelancer"
                      type="text"
                      id="contact-Subject"
                      class="form-control"
                    />
                    <label for="contact-Subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      name="message"
                      placeholder="Here you let your message."
                      type="text"
                      id="contact-message"
                      class="form-control md-textarea"
                      rows="3"
                    ></textarea>
                    <label for="contact-message">You message</label>
                  </div>
                </div>
              </div>
              <input
                class="btn-send btn text-white"
                type="submit"
                value="Send"
              />
            </form>
          </div>

          <div class="col-md-4 col-xl-3 text-center">
            <ul class="list-unstyled">
              <li>
                <i class="fa fa-home fa-2x mt-4 blue-text"></i>
                <p>Brazil</p>
              </li>

              <li>
                <i class="fa fa-phone fa-2x mt-4 blue-text"></i>
                <p>+55 14 997981721</p>
              </li>

              <li>
                <i class="fa fa-envelope fa-2x mt-4 blue-text"></i>
                <p className="text-center my-email">
                  jhonatansilverio1258@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
