import React, { Component } from "react";
import fire from "../fire_energy.png";

export default class Attacks extends Component {
  renderAttacks(attacks) {
    const atks = attacks.map((atk) => (
      <div key={atk.name.replace(" ", "-")}>
        <span className="attack__cost">
          <img src={fire} className="energy__cost" />
          <img src={fire} className="energy__cost" />
          <img src={fire} className="energy__cost" />
          <img src={fire} className="energy__cost" />
        </span>
        <span className="attack__name">{atk.name}</span>
        <span className="attack__damage right">{atk.damage}</span>
        <p className="attack__description">{atk.text}</p>
      </div>
    ));

    return <div>{atks}</div>;
  }

  render() {
    const { pokemon } = this.props;

    return (
      <div className="attacks">
        {pokemon.ability && (
          <div>
            <small className="ability__type">{pokemon.ability.type}</small>
            <span className="ability__name">{pokemon.ability.name}</span>
            <p className="attack__description">{pokemon.ability.text}</p>
          </div>
        )}
        {this.renderAttacks(pokemon.attacks)}
      </div>
    );
  }
}
