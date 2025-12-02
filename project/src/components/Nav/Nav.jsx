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
        <a href="#problema">Problema</a>
        <a href="#demo">Demo</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}
