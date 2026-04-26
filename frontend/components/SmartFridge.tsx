"use client";
import { useState } from "react";
import { apiUrl } from "../lib/api";

export default function SmartFridge() {
  const [value, setValue] = useState("jaja, tuna, riža");
  const [result, setResult] = useState<any>(null);

  const generate = async () => {
    const ingredients = value.split(",").map(x => x.trim()).filter(Boolean);
    const r = await fetch(apiUrl("/fridge/recipe"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients })
    });
    const data = await r.json();
    setResult(data);
  };

  return (
    <section style={{ padding: 16, border: "1px solid #3a3a3a", borderRadius: 12 }}>
      <h2>Smart Fridge</h2>
      <input value={value} onChange={(e) => setValue(e.target.value)} style={{ width: "100%" }} />
      <button onClick={generate}>Generiraj recept</button>
      {result && (
        <div>
          <h3>{result.title}</h3>
          <p>{result.instructions}</p>
        </div>
      )}
    </section>
  );
}
