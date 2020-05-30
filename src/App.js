import React, { useState } from "react";
import { connect } from "react-redux";

// import { fetchPokemon } from "./reducers/actions";
import Card from "./components/Card";
import HistoryDashboard from "./components/HistoryDashboard";
import "./App.css";

export const App = ({ battle, dispatch }) => {
  const [history, setHistory] = useState([]);
  const [turn, setTurn] = useState(0);

  const savePlay = (move) => {
    setHistory((h) => [...h, move]);
    if (!move.ability) {
      setTurn((t) => t + 1);
    }
  };

  // React.useEffect(() => {
  // dispatch(fetchPokemon("left"));
  // dispatch(fetchPokemon("right"));
  // }, []);

  const myTurn = Boolean(turn % 2);

  return (
    <div className="App">
      <Card
        myTurn={myTurn}
        player="left"
        pokemon={battle["left"]}
        savePlay={savePlay}
      />
      <HistoryDashboard history={history} />
      <Card
        myTurn={!myTurn}
        player="right"
        pokemon={battle["right"]}
        savePlay={savePlay}
      />
    </div>
  );
};

App.defaultProps = {
  battle: {},
};

export default connect(({ battle }) => ({ battle }))(App);
