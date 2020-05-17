import Pokemon from "pokemontcgsdk";

import availablePokemons from "../sprites/pokemon";

const AVAILABLE_POKEMONS = Object.keys(availablePokemons);

const RandomNumber = (number = 151) => Math.floor(Math.random() * number);

const getPokemonByPokedexId = async () =>
  await Pokemon.card.where({ nationalPokedexNumber: RandomNumber() });

export default async function getPokemon() {
  const candidate = await getPokemonByPokedexId(RandomNumber());
  return candidate.find((pokemon) => AVAILABLE_POKEMONS.includes(pokemon.name));
}
