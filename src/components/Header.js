import React from "react";
import logo from "../assets/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.css";

const Header = () => (
  <header className="bg-light py-3 mb-4 custom-primary-border-bottom">
    <div className="container d-flex align-items-center justify-content-between">
      <img
        src={logo}
        alt="University of Tennessee, Knoxville Logo"
        height="50px"
        className="me-4"
        style={{ objectFit: "contain" }}
      />
      <h1 className="h4 m-0 custom-header-text">UTK Library Hours Explorer</h1>
    </div>
  </header>
);

export default Header;
