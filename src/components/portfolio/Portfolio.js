import React, { useState } from "react";
import "./Portfolio.css";
import projectsData from "./Menu";

function Portfolio() {
  const [items, setItems] = useState(projectsData);
  const filterItem = (categoryItem) => {
    const updatedItem = projectsData.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItem);
  };

  return (
    <>
      <section className="work container section" id="portfolio">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My Recent Work</span>

        <div className="work__filters">
          <span className="work__item" onClick={() => setItems(projectsData)}>
            All
          </span>
          <span
            className="work__item"
            onClick={() => filterItem("Web Designs")}
          >
            Web Designs
          </span>
          <span
            className="work__item"
            onClick={() => filterItem("Full Stack Projects")}
          >
            Full Stack Projects
          </span>
        </div>
        <div className="work__container grid">
          {items.map((elem) => {
            const { id, image, title, category, links } = elem;
            return (
              <div className="work__card" key={id}>
                <div className="work__thumbnail">
                  <img src={image} alt="" className="work__img" />
                  <div className="work__mask"></div>
                </div>

                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <a href={links} className="work__button" target="blank">
                  <i className="uil uil-link work__button-icon"></i>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
