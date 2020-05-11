import React, { Component } from "react";
import Pokemon from "pokemontcgsdk";

import availablePokemons from "./sprites/pokemon";
import Card from "./components/Card";
import charizard from "./charizard.json";
import gyarados from "./gyarados.json";
import "./App.css";

const AVAILABLE_POKEMONS = Object.keys(availablePokemons);

const RandomNumber = (number = 151) => Math.floor(Math.random() * number);

const getPokemonByPokedexId = async (id) =>
  await Pokemon.card.where({ nationalPokedexNumber: id });

const getValidPokemon = async () => {
  const candidate = await getPokemonByPokedexId(RandomNumber());
  return candidate.find((pokemon) => AVAILABLE_POKEMONS.includes(pokemon.name));
};

class App extends Component {
  state = { pokemons: [] };

  async componentDidMount() {
    this.setState({
      // pokemons: [await getValidPokemon(), await getValidPokemon()],
      pokemons: [charizard, gyarados],
    });
  }

  render() {
    const { pokemons } = this.state;

    if (pokemons.length < 2) {
      return <span>Loading...</span>;
    }

    return (
      <div className="App">
        <Card pokemon={pokemons[0]} />
        <Card pokemon={pokemons[1]} />
      </div>
    );
  }
}

export default App;
