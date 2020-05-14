import { combineReducers } from "redux";

import Attack from "./Attack";
import pokemons from "./Battle";

export default combineReducers({
  Attack,
  pokemons,
});
