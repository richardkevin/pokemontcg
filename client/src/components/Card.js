import React, { Component } from "react";

import Attacks from "./Attacks";
import Header from "./Header";
import Footer from "./Footer";
import allPokemons from "../sprites/pokemon";

const Card = (props) => {
  const { pokemon } = props;
  const { activePokemon } = pokemon;

  if (!activePokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`pokemon__card pokemon__type--${activePokemon.types[0]}`}>
      <Header pokemon={pokemon} />
      <img
        className="pokemon__picture"
        src={allPokemons[activePokemon.name]}
        alt={activePokemon.name}
      />
      <Attacks {...props} />
      <Footer pokemon={pokemon} />
    </div>
  );
};

export default Card;
