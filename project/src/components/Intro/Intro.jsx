import { useEffect, useState } from "react";
import "./Intro.css";

export default function GTAIntroDemo() {
  const [progress, setProgress] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    if (!scrollEnabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [scrollEnabled]);

  useEffect(() => {
    if (scrollEnabled) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;

      setProgress((p) => {
        const next = Math.min(1, Math.max(0, p + delta * 0.0005));
        if (next === 0) {
          setScrollEnabled(false);
        }
        return next;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollEnabled]);

  useEffect(() => {
    if (progress >= 0.95) {
      setScrollEnabled(true);
    }
  }, [progress]);

  const scale = 3 - progress * 2.7;
  const textOpacity = Math.max(0, 1 - progress * 2.5);

  return (
    <div className="intro-container">
      <div 
        className="intro-hero"
        style={{ 
          position: scrollEnabled ? "absolute" : "fixed",
          zIndex: scrollEnabled ? -1 : 5 
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
            opacity: progress > 0 ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}