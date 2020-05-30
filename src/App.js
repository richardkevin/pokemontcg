import React, { useState } from "react";
import { connect } from "react-redux";

// import { fetchPokemon } from "./reducers/actions";
import Card from "./components/Card";
import HistoryDashboard from "./components/HistoryDashboard";
import "./App.css";

export const App = ({ currentTurn, left, right }) => {
  const [history, setHistory] = useState([]);

  const savePlay = (move) => {
    setHistory((h) => [...h, move]);
  };

  // React.useEffect(() => {
  // dispatch(fetchPokemon("left"));
  // dispatch(fetchPokemon("right"));
  // }, []);

  return (
    <div className="App">
      <Card
        player="left"
        currentTurn={currentTurn}
        pokemon={left.activePokemon}
        victimPokemon={right.activePokemon}
        savePlay={savePlay}
      />
      <HistoryDashboard history={history} />
      <Card
        player="right"
        currentTurn={currentTurn}
        pokemon={right.activePokemon}
        victimPokemon={left.activePokemon}
        savePlay={savePlay}
      />
    </div>
  );
};

App.defaultProps = {
  left: {},
  right: {},
};

export default connect(({ battle }) => battle)(App);
