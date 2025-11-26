// ...existing code...
import { useEffect, useState } from "react";
import "./Intro.css";
import logo from "../../assets/WePlanLogoTransparente.png";


export default function GTAIntroDemo({
  startScale = 3.5,
  minScale = 0.9,
  wheelSensitivity = 0.0004,
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
    if (scrollEnabled) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      setProgress((p) => {
        const next = Math.min(1, Math.max(0, p + delta * wheelSensitivity));
        if (next === 0) {
          setScrollEnabled(false);
        }
        return next;
      });
    };

    const keyStep = Math.max(0.02, wheelSensitivity * 50); 

    const handleKey = (e) => {
     
      if (scrollEnabled) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setProgress((p) => Math.min(1, p + keyStep));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setProgress((p) => Math.max(0, p - keyStep));
      } 
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [scrollEnabled, wheelSensitivity]);

  useEffect(() => {
    setScrollEnabled(progress >= 0.95);
  }, [progress]);


  const scale = startScale - progress * (startScale - minScale);
  const textOpacity = Math.max(0, 1 - progress * 2.5);
  const imageOpacity = Math.min(1, progress * 1.1);

  return (
    <div className="intro-container">
      <div
        className="intro-hero"
        style={{
          // fixed durante la animación, luego absolute para no "seguir" al scroll del viewport
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

// src="https://picsum.photos/1500/900"
// src={logo}