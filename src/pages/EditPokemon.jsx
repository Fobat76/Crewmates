import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";


const EditPokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({
    name: "",
    trait: "",
    type: "",
    level: "",
  });

  useEffect(() => {
    const fetchPokemon = async () => {
      const { data } = await supabase
        .from("Pokemon")
        .select("*")
        .eq("id", id)
        .single();

      if (data) setPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPokemon((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updatePokemon = async (e) => {
    e.preventDefault();
    await supabase
      .from("Pokemon")
      .update({
        name: pokemon.name,
        trait: pokemon.trait,
        type: pokemon.type,
        level: parseInt(pokemon.level),
      })
      .eq("id", id);

    window.location = "/team";
  };

  const deletePokemon = async () => {
    await supabase.from("Pokemon").delete().eq("id", id);
    window.location = "/team";
  };

  return (
    <form onSubmit={updatePokemon}>
      <label htmlFor="name">Name</label><br />
      <input
        type="text"
        id="name"
        name="name"
        value={pokemon.name}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="trait">Trait</label><br />
      <input
        type="text"
        id="trait"
        name="trait"
        value={pokemon.trait}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="type">Type</label><br />
      <input
        type="text"
        id="type"
        name="type"
        value={pokemon.type}
        onChange={handleChange}
      /><br /><br />

      <label htmlFor="level">Level</label><br />
      <input
        type="number"
        id="level"
        name="level"
        value={pokemon.level}
        onChange={handleChange}
      /><br />

      <input type="submit" value="Update" />
      <button className="deleteButton" type="button" onClick={deletePokemon}>
        Delete
      </button>
    </form>
  );
};

export default EditPokemon;
