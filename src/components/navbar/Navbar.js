import React from "react";
import myLogo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent navbar-fixed-top sticky-top">
      <div className="container-fluid">
        <img className="logo-png" src={myLogo} alt="Pawel Zawadzki"></img>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleNavbarOnMobile"
          aria-controls="toggleNavbarOnMobile"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleNavbarOnMobile">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="Header">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#About">
                about me
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#Portfolio"
              >
                projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#Contact"
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
