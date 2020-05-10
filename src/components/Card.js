import React, { Component } from "react";

import Attacks from "./Attacks";
import Header from "./Header";
import Footer from "./Footer";
import chariz from "../charizard.png";

export default class Card extends Component {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <div className="card">
        <Header pokemon={pokemon} />
        <img className="picture" src={chariz} alt="pokemon" />
        <Attacks pokemon={pokemon} />
        <Footer pokemon={pokemon} />
      </div>
    );
  }
}
