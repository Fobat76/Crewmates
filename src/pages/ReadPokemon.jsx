import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import "./ReadPosts.css";

const ReadPokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Pokemon")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setPokemon(data);
    };

    fetchData();
  }, []);

  return (
    <div className="team-container">
      <h1>All Created Pokémon</h1>
      <div className="team-grid">
        {pokemon.length > 0 ? (
          pokemon.map((poke) => (
            <Link to={`/edit/${poke.id}`} key={poke.id} style={{ textDecoration: "none" }}>
              <div className="card">
                <h3>{poke.name}</h3>
                <p><strong>Trait:</strong> {poke.trait}</p>
                <p><strong>Type:</strong> {poke.type}</p>
                <p><strong>Level:</strong> {poke.level}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No Pokémon Created Yet 😞</p>
        )}
      </div>
    </div>
  );
};

export default ReadPokemon;
