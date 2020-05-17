import React, { Component } from "react";

import Attacks from "./Attacks";
import Header from "./Header";
import Footer from "./Footer";
import allPokemons from "../sprites/pokemon";

const Card = ({ pokemon, ...props }) => {
  const { activePokemon } = pokemon;

  if (!activePokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`pokemon__card pokemon__type--${
        activePokemon.types && activePokemon.types[0]
      }`}
    >
      <Header pokemon={activePokemon} />
      <img
        className="pokemon__picture"
        src={allPokemons[activePokemon.name]}
        alt={activePokemon.name}
      />
      <Attacks {...props} />
      <Footer pokemon={activePokemon} />
    </div>
  );
};

export default Card;
