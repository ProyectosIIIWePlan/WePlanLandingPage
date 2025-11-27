import { useEffect, useState } from "react";
import "./Intro.css";
import logo from "../../assets/WePlanLogoTransparente.png";

export default function GTAIntroDemo({
  startScale = 3.5,
  minScale = 0.9,
  wheelSensitivity = 0.0003,
}) {
  const [progress, setProgress] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = scrollEnabled ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [scrollEnabled]);

  useEffect(() => {
    const handleWheel = (e) => {
      const delta = e.deltaY;

      
      if (!scrollEnabled) 
      {
        e.preventDefault();
        setProgress((p) => {
          const next = Math.min(1, Math.max(0, p + delta * wheelSensitivity));
          // Activar scroll cuando llegue a 0.95
          if (next >= 0.95) { setScrollEnabled(true); }
          return next;
        });
      } else {
        // Si está en scroll normal y scrollea hacia arriba desde el top
        if (window.scrollY === 0 && delta < 0) 
        {
          e.preventDefault();
          setProgress((p) => {
            const next = Math.min(1, Math.max(0, p + delta * wheelSensitivity));
            // Volver a animación si retrocede
            if (next < 0.95) { setScrollEnabled(false); }
            return next;
          });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollEnabled, wheelSensitivity]);

  const scale = startScale - progress * (startScale - minScale);
  const textOpacity = Math.max(0, 1 - progress * 2.5);
  const imageOpacity = Math.min(1, progress * 1.1);

  return (
    <div className="intro-container">
      <div
        className="intro-hero"
        style={{
          position: scrollEnabled ? "absolute" : "fixed",
          zIndex: scrollEnabled ? -1 : 5,
        }}
      >
        <div className="intro-text" style={{ opacity: textOpacity }}>
          WEPLAN
        </div>

        <img
          src="https://picsum.photos/1500/900"
          className="intro-image"
          alt="Intro"
          style={{
            transform: `scale(${scale})`,
            opacity: imageOpacity,
          }}
        />
      </div>
    </div>
  );
}