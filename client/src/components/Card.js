import React, { Component } from "react";

import Attacks from "./Attacks";
import Header from "./Header";
import Footer from "./Footer";
import pokemons from "../sprites/pokemon";

export default class Card extends Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div className="card">
        <Header pokemon={pokemon} />
        <img className="pokemon__picture" src={pokemons[pokemon.name]} alt={pokemon.name} />
        <Attacks pokemon={pokemon} />
        <Footer pokemon={pokemon} />
      </div>
    );
  }
}
