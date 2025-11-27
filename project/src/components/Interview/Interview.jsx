import React from "react";
import "./Interview.css";

export default function InterviewItem({ index, image, name, quote }) {
  const isEven = index % 2 === 0; // pares a la derecha

  return (
    <div className={`interview-item ${isEven ? "right" : "left"}`}>
      <div className="interview-image-wrapper">
        <img src={image} alt={name} className="interview-image" />
      </div>

      <div className="interview-text">
        <h3>{name}</h3>
        <p>{quote}</p>
      </div>
    </div>
  );
}