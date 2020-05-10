import React, { Component } from 'react';

import Header from './components/Header';
import chariz from './charizard.png';
import fire from './fire_energy.png';
import './App.css';

class Attacks extends Component {
  renderAttacks(attacks) {
    const atks = attacks.map(atk =>
        <div key={atk.name.replace(" ", "-")}>
          <span className="attack-cost">
            <img src={fire} className="energy-cost" alt="pokemon" />
            <img src={fire} className="energy-cost" alt="pokemon" />
            <img src={fire} className="energy-cost" alt="pokemon" />
            <img src={fire} className="energy-cost" alt="pokemon" />
          </span>
          <span className="attack-name">{atk.name}</span>
          <span className="attack-damage right">{atk.damage}</span>
          <p className="attack-description">{atk.text}</p>
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
        <small className="ability__type">{pokemon.ability.type}</small>
        <span className="ability__name">{pokemon.ability.name}</span>
        <p className="attack-description">{pokemon.ability.text}</p>
      </div>
    ) : null;

    return (
      <div className="attacks">
        {hasAbility}
        {this.renderAttacks(pokemon.attacks)}
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <div className="footer">
        <small className="weaknesses">
          weakness
          {pokemon.weaknesses.map(weak => <div>{weak.type + " " + weak.value}</div>)}
        </small>
        <small className="resistances">
          resistance
          {pokemon.resistances.map(resist => <div>{resist.type + " " + resist.value}</div>)}
        </small>
        <small className="retreat">
          retreat cost
          <div>{pokemon.retreatCost.length}</div>
        </small>
      </div>
    );
  }
}

class Card extends Component {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <div className="card">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {pokemon});
        })}
      </div>
    );
  }
}

class Image extends Component {
  render() {
    return (
      <div>
        <img className="picture" src={chariz} alt="pokemon" />
      </div>
    )
  }
};

class App extends Component {
  render() {
    const pokemon = this.props.appState.pokemon;

    return (
      <Card pokemon={pokemon}>
        <Header />
        <Image />
        <Attacks />
        <Footer />
      </Card>
    );
  }
}

export default App;
