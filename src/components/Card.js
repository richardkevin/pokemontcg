import React from "react";

import Attacks from "./Attacks";
import Header from "./Header";
import Footer from "./Footer";
import allPokemons from "../sprites/pokemon";

const Card = (props) => {
  const { pokemon } = props;

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`pokemon__card pokemon__type--${
        pokemon.types && pokemon.types[0]
      }`}
    >
      <Header pokemon={pokemon} />
      <img
        className="pokemon__picture"
        src={allPokemons[pokemon.name]}
        alt={pokemon.name}
      />
      <Attacks {...props} />
      <Footer pokemon={pokemon} />
    </div>
  );
};

export default Card;
