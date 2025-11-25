import { useEffect, useState } from "react";
import reactLogo from '../../assets/react.svg';

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
        return next;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollEnabled]);

  useEffect(() => {
    if (progress === 1) {
      setScrollEnabled(true);
    }
  }, [progress]);

  const scale = 1 - progress * 0.6;
  const opacity = 1 - progress * 0.7;

  return (
    <div className="w-full h-[300vh] bg-neutral-900 text-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://picsum.photos/1500/900"
          className="transition-transform transition-opacity duration-75"
          style={{
            transform: `scale(${scale})`,
            opacity,
          }}
        />
      </div>

      <div className="w-full h-screen flex items-center justify-center text-4xl font-bold">
        Empieza el scroll normal aquí ↓
      </div>
    </div>
  );
}
