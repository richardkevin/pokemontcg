import React, { Component } from "react";

import charmel from "../charmeleon.png";
import fire from "../fire_energy.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.renderEvolveFrom = this.renderEvolveFrom.bind(this);
  }

  renderEvolveFrom(evolveFrom) {
    return <img src={charmel} className="evolves-from" alt="evolves-from" />;
  }

  render() {
    const { pokemon } = this.props;
    const evolvesFrom = pokemon.evolvesFrom
      ? this.renderEvolveFrom(pokemon.evolvesFrom)
      : null;

    return (
      <div className="card-header">
        {evolvesFrom}
        <span className="pokemon__name">{pokemon.name}</span>
        <span className="right">
          <small>hp</small>
          {pokemon.hp}
          <img src={fire} className="pokemon__type" alt="pokemon" />
        </span>
      </div>
    );
  }
}
