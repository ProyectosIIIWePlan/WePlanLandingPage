import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) return; 
    setSubmitted(true);
  };

  return (
    <footer id="contacto" className="footer">
      <div className="footer-inner">

       
        <div className="footer-contact">
          <h3 className="footer-title">Contáctanos</h3>
          <p className="footer-text">
            ¿Tienes dudas sobre WEPLAN o quieres colaborar con nosotros?
          </p>

          <div className="footer-contact-info">
            <p>Email: <a href="mailto:weplan@support.com">weplan@support.com</a></p>
            <p>Teléfono: +34 999 999 999</p>
            <p>U-tad — Proyecto académico 2025</p>
          </div>
        </div>

       
        <div className="footer-newsletter">
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-text">Recibe novedades, lanzamientos y actualizaciones del proyecto.</p>

          {!submitted ? (
            <form className="footer-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Tu email..."
                className="footer-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit" className="footer-button">
                Suscribirme
              </button>
            </form>
          ) : (
            <p className="footer-success">¡Gracias por suscribirte! 📨</p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WEPLAN — Proyecto universitario</p>
      </div>
    </footer>
  );
}
