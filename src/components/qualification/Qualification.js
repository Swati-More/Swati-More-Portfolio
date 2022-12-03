import React, { useState } from "react";
import "./Qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Higher Secondary Certification(12th)
                    <br />
                    <span
                      style={{
                        color: "black",
                        fontSize: "var(--small-font-size)",
                      }}
                    >
                      With 70%
                    </span>
                  </h3>
                  <span className="qualification__subtitle">
                    Dattakala Institute
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2018-2019
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    {" "}
                    Bachelor's in Computer Application(BCA)
                    <br />
                    <span
                      style={{
                        color: "black",
                        fontSize: "var(--small-font-size)",
                      }}
                    >
                      With 85%
                    </span>
                  </h3>
                  <span className="qualification__subtitle">
                    Tuljaram Chaturchand College Campus Baramati
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2021-2022
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Full Stack Developer</h3>
                  <span className="qualification__subtitle">
                    Cetpa Infotech Pvt. Ltd Institute Noida
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Fresher</h3>
                  <span className="qualification__subtitle">
                    Looking for good oportunity
                  </span>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Qualification;
