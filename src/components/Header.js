import React from "react";

import energy from "../sprites/energy";
import pokemons from "../sprites/pokemon";

const Header = ({ pokemon }) => {
  const { evolvesFrom, hp, name, types } = pokemon;
  const pokemonType = (types && types[0]) || "Colorless";

  return (
    <div className="card-header">
      {evolvesFrom && (
        <img
          src={pokemons[evolvesFrom]}
          className="pokemon__evolves-from"
          alt="evolves-from"
        />
      )}
      <span className={"pokemon__name" + (evolvesFrom && "--has-evolve")}>
        {name}
      </span>
      <span className="right">
        <small>hp</small>
        <span>{hp}</span>
        <img
          src={energy[pokemonType]}
          className="pokemon__type"
          alt={pokemonType}
        />
      </span>
    </div>
  );
};

export default Header;
