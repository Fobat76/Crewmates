import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import "./ReadPosts.css";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const { data, error } = await supabase
        .from("Pokemon")
        .select("*")
        .order("level", { ascending: false });

      if (error) {
        console.error("Error loading team:", error.message);
      } else {
        setTeam(data);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="team-container">
      <h1>Your Pokémon Team</h1>
      <div className="team-grid">
        {team.length > 0 ? (
          team.map((poke) => (
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
          <p>No Pokémon yet. Go create one!</p>
        )}
      </div>
    </div>
  );
};

export default Team;
