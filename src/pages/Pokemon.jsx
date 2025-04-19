import React, { useState } from "react";
import { supabase } from "../client"; // Adjust if needed

function Pokemon() {
  const [name, setName] = useState("");
  const [trait, setTrait] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name && trait && type && level) {
      const { error } = await supabase.from("Pokemon").insert([
        {
          name,
          trait,
          type,
          level: parseInt(level),
        },
      ]);

      if (error) {
        console.error("Insert error:", error.message);
        setErrorMsg("Failed to create Pokémon. Check Supabase table and permissions.");
      } else {
        setSubmitted(true);
        setErrorMsg("");
        // Optional: redirect or clear form
        // window.location = "/";
      }
    } else {
      setErrorMsg("Please fill out all fields.");
    }
  };

  return (
    <div className="pokemon-form">
      <h1>Create Your Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Trait (Nature):</label>
        <br />
        {["Brave", "Bold", "Timid", "Jolly"].map((t) => (
          <label key={t}>
            <input
              type="radio"
              name="trait"
              value={t}
              checked={trait === t}
              onChange={(e) => setTrait(e.target.value)}
            />
            {t}
          </label>
        ))}
        <br />
        <br />

        <label>Type:</label>
        <br />
        {["Fire", "Water", "Grass", "Electric"].map((t) => (
          <label key={t}>
            <input
              type="radio"
              name="type"
              value={t}
              checked={type === t}
              onChange={(e) => setType(e.target.value)}
            />
            {t}
          </label>
        ))}
        <br />
        <br />

        <label htmlFor="level">Level:</label>
        <input
          type="number"
          id="level"
          name="level"
          placeholder="Level (1-100)"
          min="1"
          max="100"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <br />

        <button type="submit">Create</button>
      </form>

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

      {submitted && (
        <div className="result">
          <h2>Pokémon Created!</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Trait:</strong> {trait}</p>
          <p><strong>Type:</strong> {type}</p>
          <p><strong>Level:</strong> {level}</p>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
