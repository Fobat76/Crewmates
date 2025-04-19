import React from "react";
import { useState } from "react";
import { supabase } from "../client";

const CreatePokemon = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    trait: "",
    type: "",
    level: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemon((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { error } = await supabase.from("Pokemon").insert([
      {
        name: pokemon.name,
        trait: pokemon.trait,
        type: pokemon.type,
        level: parseInt(pokemon.level),
      }
    ]);
  
    if (error) {
      console.error("Error creating Pokémon:", error.message);
      alert("Failed to create Pokémon.");
    } else {
      window.location = "/"; 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" name="name" onChange={handleChange} />
        <br />
        <br />

        <label htmlFor="trait">Trait</label>
        <br />
        <select id="trait" name="trait" onChange={handleChange}>
          <option value="">Select Trait</option>
          <option value="Brave">Brave</option>
          <option value="Bold">Bold</option>
          <option value="Timid">Timid</option>
          <option value="Jolly">Jolly</option>
        </select>
        <br />
        <br />

        <label htmlFor="type">Type</label>
        <br />
        <select id="type" name="type" onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          <option value="Electric">Electric</option>
        </select>
        <br />
        <br />

        <label htmlFor="level">Level</label>
        <br />
        <input
          type="number"
          id="level"
          name="level"
          min="1"
          max="100"
          onChange={handleChange}
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreatePokemon;
