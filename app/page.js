"use client";

import { useState } from "react";

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Spostamento casuale rispetto al centro, restando dentro la finestra
  function muovi() {
    const maxX = Math.max(0, window.innerWidth / 2 - 120);
    const maxY = Math.max(0, window.innerHeight / 2 - 60);
    setPos({
      x: (Math.random() * 2 - 1) * maxX,
      y: (Math.random() * 2 - 1) * maxY,
    });
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1
        style={{
          margin: 0,
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: "transform 0.6s ease-in-out",
        }}
      >
        Hello World
      </h1>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={muovi}>Muovi</button>
        <button onClick={() => setPos({ x: 0, y: 0 })}>Reset</button>
      </div>
    </main>
  );
}
