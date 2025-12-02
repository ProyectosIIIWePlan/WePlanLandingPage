import React from "react";
import "./ScrollText.css";

export default function ScrollText({text}) {
  return (
    <section id="scroll-text">
      <p>
        <span>
          {text}
        </span>
      </p>
    </section>
  );
}
