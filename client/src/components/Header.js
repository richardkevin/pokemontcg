import React from "react";

import energy from "../sprites/energy";
import pokemons from "../sprites/pokemon";

const Header = ({ pokemon }) => {
  const { evolvesFrom, name, hp, types } = pokemon;

  return (
    <div className="card-header">
      {evolvesFrom && (
        <img
          src={pokemons[evolvesFrom]}
          className="evolves-from"
          alt="evolves-from"
        />
      )}
      <span className={"pokemon__name" + (evolvesFrom && "--has-evolve")}>
        {name}
      </span>
      <span className="right">
        <small>hp</small>
        {hp}
        <img src={energy[types[0]]} className="pokemon__type" alt={types[0]} />
      </span>
    </div>
  );
};

export default Header;
