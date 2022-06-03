import React, { useState } from "react";
import "./TRISH.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="https://www.facebook.com/trisha.hzl" target="_blank" className="nav__brand">
        TRISHA
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="https://www.bing.com/search?q=home&cvid=96ed0fb16186407098a8a52619f8c9e8&aqs=edge..69i57j0l7j69i60.1135j0j1&pglt=43&FORM=ANNTA1&PC=U531" target='_blank' className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="https://www.facebook.com/trisha.hzl" target="_blank" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="https://www.bing.com/search?q=portfolio&cvid=e3248b4306284464a886d466ae46ff82&aqs=edge.0.0l9.3111j0j9&FORM=ANAB01&PC=U531" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="https://www.bing.com/search?q=skill&cvid=7b2483287bea4613b3d12a8436744356&aqs=edge..69i57j0l8.2953j0j9&FORM=ANAB01&PC=U531" target="_blank" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="https://www.facebook.com/trisha.hzl" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
