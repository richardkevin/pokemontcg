import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Card from "./components/Card";
import "./App.css";

const App = (props) => {
  const { battle } = props;
  const [turns, setTurns] = useState(0);
  const [currentTurn, setCurrentTurn] = useState("foo");

  useEffect(() => {
    setTurns(turns + 1);
    setCurrentTurn(currentTurn);
  });

  return (
    <div className="App">
      <Card pokemon={battle.foo.activePokemon} />
      <Card pokemon={battle.bar.activePokemon} />
    </div>
  );
};

export default connect(({ battle }) => ({ battle }))(App);
