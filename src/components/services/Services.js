import React, { useState } from "react";
import "./Services.css";

function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">
                Front-end <br /> Architecture & Design
              </h3>
            </div>

            <span className="services__button " onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active__modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">
                  Front-end Architecture & Design
                </h3>
                <p className="services__modal-description">
                  As a person looking to serve a company all, I looked for a
                  chance to prove myself and I am hopeful you will grant me that
                  chance.As a Fresher i can provide Services like:-
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Frontend development services aimed to create efficient
                      and sustainable applications with frontend architecture a
                      set of tools and processes to improve the quality of
                      frontend code.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      With the help of HTML,CSS,Bootstrap,Javascript,ReactJs
                      like technologies I can provide Web-apps Web-pages
                      designs.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface designs.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                SPA Application & <br />
                Development
              </h3>
            </div>

            <span className="services__button " onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services__icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active__modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">
                  SPA Application & Development
                </h3>
                <p className="services__modal-description">
                  As a person looking to serve a company all, I looked for a
                  chance to prove myself and I am hopeful you will grant me that
                  chance.As a Fresher i can provide Services like:-
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Single page applications development services with
                      powerful front end, JavaScript-based frameworks for quick
                      scalability.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      With the help of Bootstrap,Javascript,ReactJs,Redux,Axios
                      like technologies I can provide Web-apps Web-pages
                      designs.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface designs and singl page
                      applications.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-web-grid  services__icon"></i>
              <h3 className="services__title">
                Back-end <br /> Architecture & Design
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
              View More <i className="uil uil-arrow-right services__icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__modal active__modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">
                  Back-end Architecture & Design
                </h3>
                <p className="services__modal-description">
                  As a person looking to serve a company all, I looked for a
                  chance to prove myself and I am hopeful you will grant me that
                  chance.As a Fresher i can provide Services like:-
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web Apps Back-End Development with the help of NodeJs and
                      MongoDB technologies.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      API Development and Integration Axios.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Web Applications</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Backend Refactoring.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
