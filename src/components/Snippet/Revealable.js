"use client";
import React from "react";

function Revealable({ children, buttonText = "Reveal Content" }) {
  const [isRevealed, setisRevealed] = React.useState(false);

  return isRevealed ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => setisRevealed(true)}>{buttonText}</button>
    </div>
  );
}

export default Revealable;
