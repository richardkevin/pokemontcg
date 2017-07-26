import React, { Component } from 'react';
import './App.css';
import charizard from './charizard.json';
import pic from './charizard.png';

class Card extends Component {
  renderAttacks(attacks) {
    const atks = attacks.map(atk =>
        <div key={atk.name.replace(" ", "-")}>
          <span>{atk.cost.length}</span>
          <span>{atk.name}</span>
          <span className="right">{atk.damage}</span>
          <p>{atk.text}</p>
        </div>
      );

    return (
      <div>
        {atks}
      </div>
    )
  }

  render() {
    const pokemon = this.props.pokemon;
    const hasAbility = pokemon.ability ? (
      <div>
        <span>{pokemon.ability.type}</span>
        <span>{pokemon.ability.name}</span>
        <p>{pokemon.ability.text}</p>
      </div>
    ) : null;

    return (
      <div className="card">
        <div className="card-header">
          <span>{pokemon.evolvesFrom}</span>
          <span>{pokemon.name}</span>
          <span className="right">
            <small>hp</small>
            {pokemon.hp}
            {pokemon.types}
          </span>
        </div>
        <img src={pic} className="picture" alt="pokemon" />

        <div className="attacks">
          {hasAbility}
          {this.renderAttacks(pokemon.attacks)}
        </div>

        <div className="footer">
          <span className="weaknesses">{pokemon.weaknesses.map(weak => weak.type + " " + weak.value)}</span>
          <span className="resistances">{pokemon.resistances.map(resist => resist.type + " " + resist.value)}</span>
          <span className="retreat">{pokemon.retreatCost.length}</span>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Card pokemon={charizard} />
    );
  }
}

export default App;
