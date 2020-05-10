import React from "react";

import energy from "../sprites/energy";
import charmel from "../charmeleon.png";

const Header = ({ pokemon }) => {
  return (
    <div className="card-header">
      {pokemon.evolvesFrom && (
        <img src={charmel} className="evolves-from" alt="evolves-from" />
      )}
      <span className="pokemon__name">{pokemon.name}</span>
      <span className="right">
        <small>hp</small>
        {pokemon.hp}
        <img
          src={energy[pokemon.types[0]]}
          className="pokemon__type"
          alt={pokemon.types[0]}
        />
      </span>
    </div>
  );
};

export default Header;
