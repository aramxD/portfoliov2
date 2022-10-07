import React from "react";
import styled from "styled-components";

import JSlogo from "../assets/img/imgComun/logo_450x200_azul_trans.png";

const Navbar = ({ className }) => {
  return (
    <nav
      id="navbar"
      aria-label="navigation bar"
      className={`seccion ${className}`}
    >
      <a href="#welcome-section">
        <img src={JSlogo} alt="logo" className="nav-logo" />
      </a>
      <a
        className="animate__animated animate__pulse animate__infinite "
        href="#aboutme"
      >
        About Me
      </a>
      <a
        className="animate__animated animate__pulse animate__infinite "
        href="#skills"
      >
        Skills
      </a>
      <a
        className="animate__animated animate__pulse animate__infinite "
        href="#projects"
      >
        Projects
      </a>
      <a
        className="animate__animated animate__pulse animate__infinite "
        href="#contact"
      >
        Contact
      </a>
      <span className="indicador" id="indicador"></span>
    </nav>
  );
};

export default styled(Navbar)`
  background: #fff;
  height: 80px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  /* Menu Pegajoso */
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 100;
  flex: 1;

  a {
    flex: 1;
    /* width: 100%; */
    height: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: black;
    transition: 0.2s ease-in-out all;
    font-weight: 500;
  }

  a:hover {
    background: #f2f2f2;
  }

  img {
    height: 80px;
  }

  .indicador {
    width: 0;
    height: 5px;
    background: #4e66f8;
    position: absolute;
    bottom: 0;
    transition: 0.3s ease-in-out all;
    transform: translate(100px);
  }
`;
