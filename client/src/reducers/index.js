import { combineReducers } from "redux";

import battle from "./Battle";
import turn from "./Turn";

export default combineReducers({
  turn,
  battle,
});
