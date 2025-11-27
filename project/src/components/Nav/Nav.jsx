import React from "react";
import "./Nav.css";
import logo from "../../assets/WePlanLogoTransparente.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="Logo"
          className="navbar-logo"
        />
      </div>

      <div className="navbar-right">
        <a href="#link1">LTR1</a>
        <a href="#link2">LTR2</a>
        <a href="#link3">LTR3</a>
      </div>
    </nav>
  );
}