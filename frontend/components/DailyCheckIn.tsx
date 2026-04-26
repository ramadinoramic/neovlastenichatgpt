"use client";
import { useMemo, useState } from "react";

const comments: Record<number, string> = {
  1: "Nisam ovlašten da ti budem psiholog, ali danas idemo nježno.",
  2: "Nizak gas. Mobilnost > ego.",
  3: "Solidno. Umjeren tempo i čista tehnika.",
  4: "Dobar si. Kontroliran jači trening.",
  5: "Pun baterija. Fokus i forma, bez divljanja."
};

export default function DailyCheckIn() {
  const [energy, setEnergy] = useState(3);
  const recommendation = useMemo(() => {
    if (energy <= 2) return "Lagana mobilnost 10-15 min";
    if (energy === 3) return "Umjereni full-body trening";
    return "Jači trening snage";
  }, [energy]);

  return (
    <section style={{ padding: 16, border: "1px solid #3a3a3a", borderRadius: 12 }}>
      <h2>Dnevni check-in</h2>
      <input type="range" min={1} max={5} value={energy} onChange={(e) => setEnergy(Number(e.target.value))} />
      <p>Energija: {energy}/5</p>
      <p><strong>Komentar:</strong> {comments[energy]}</p>
      <p><strong>Preporuka:</strong> {recommendation}</p>
    </section>
  );
}
