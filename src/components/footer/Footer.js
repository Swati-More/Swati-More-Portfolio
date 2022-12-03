import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Swati More</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
          href="www.linkedin.com/in/swati-more-7288s"
          className="footer__social-link"
          target="_blank"
        >
          <i className="bx bxl-linkedin"></i>
        </a>

            <a
              href="https://www.instagram.com/s_w_a_t_i.more"
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-instagram"></i>
            </a>

            <a
              href="https://twitter.com/swatimo82791036"
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; swati. All rights Reserved
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
