"use client";
import { useState } from "react";
import { apiUrl } from "../lib/api";

export default function SafeSpaceWorkout() {
  const [exercise, setExercise] = useState("Bench Press");
  const [alt, setAlt] = useState("");

  const swap = async () => {
    const r = await fetch(apiUrl("/workout/swap"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ exercise })
    });
    const data = await r.json();
    setAlt(data.alternative || "");
  };

  return (
    <section style={{ padding: 16, border: "1px solid #3a3a3a", borderRadius: 12 }}>
      <h2>SafeSpace trening</h2>
      <p>[Lottie 3D placeholder]</p>
      <ul>
        <li>Postavi stabilan stav i neutralnu kralježnicu.</li>
        <li>Kontroliraj ekscentričnu fazu pokreta.</li>
        <li>Diši ritmično: udah priprema, izdah napor.</li>
      </ul>
      <button onClick={swap}>Gužva je</button>
      {alt && <p>Alternativa: <strong>{alt}</strong></p>}
    </section>
  );
}
