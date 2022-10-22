import React from "react";
import { useState, useRef } from "react";
import logo from "../assets/images/apps-logo.webp";
import { FaAngellist } from "react-icons/fa";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/nav.css";

const Nav = () => {
  const navRef = useRef();

  const [isHide, setHide] = useState(false);

  const showHideNavbar = () => {
    navRef.current.classList.toggle("hidden");
  };

  return (
    <>
      <div className="close-nav" onClick={() => setHide(!isHide)}>
        {isHide ? <GiHamburgerMenu onClick={showHideNavbar} /> : <GrClose onClick={showHideNavbar} /> }
      </div>
      <nav className="nav" ref={navRef}>
        <img className="app-logo" src={logo} alt="" />
        <div className="nav-items">
          <button className="nav-item">Tours</button>
          <button className="nav-item">My reservations</button>
          <button className="nav-item">Add a Tour</button>
          <button className="nav-item">Delete a Tour</button>
        </div>
        <div className="nav-footer">
          <ul className="links-container">
            <li className="links">
              <a href="/">
                <BsGithub className="links" />
              </a>
            </li>
            <li className="links">
              <a href="/">
                <BsLinkedin className="links" />
              </a>
            </li>
            <li className="links">
              <a href="/">
                <FaAngellist className="links" />
              </a>
            </li>
            <li className="links">
              <a href="/">
                <BsTwitter className="links" />
              </a>
            </li>
          </ul>
          <h1 className="heading">&#169; 2015 PIAGIO & C.S.P.A - P.IVA</h1>
        </div>
      </nav>
    </>
  );
};

export default Nav;
