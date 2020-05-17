// actions
export const INCREASE_TURN = "attack_pokemon";
export const SET_CURRENT_PLAYER = "set_current_player";

// action creators
export function increaseTurn() {
  return { type: INCREASE_TURN };
}
export function setCurrentPlayer(player) {
  return { type: SET_CURRENT_PLAYER, player };
}

const initialState = {
  total: 0,
  currentPlayer: 0,
};

const turn = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_TURN:
      return {
        ...state,
        total: state.total + 1,
      };
    case SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.player,
      };
    default:
      return state;
  }
};

export default turn;
