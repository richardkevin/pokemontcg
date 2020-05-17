import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchPokemon } from "./reducers/Battle";
import Card from "./components/Card";
import "./App.css";

const HistoryDashboard = ({ history }) => {
  const renderMove = history.map(
    ({ atk, damage, fainted, name, resistances, weaknesses }, idx) => (
      <span key={idx}>
        <div>{`${name} used ${atk.name} and caused ${atk.damage} damage`}</div>
        {resistances && <div>{resistances}</div>}
        {weaknesses && <div>{weaknesses}</div>}
        {<div>{fainted || damage}</div>}
      </span>
    )
  );

  return <div style={{ maxWidth: 500 }}>{renderMove}</div>;
};

const App = ({ battle, dispatch }) => {
  const [history, setHistory] = useState([]);
  const [myTurn, setMyTurn] = useState(true);
  const [turn, setTurn] = useState(1);

  const savePlay = (move) => {
    setHistory((h) => [...h, move]);
    setTurn(() => turn + 1);
    setMyTurn(!myTurn);
  };

  useEffect(() => {
    dispatch(fetchPokemon("left"));
    dispatch(fetchPokemon("right"));
  }, []);

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

export default connect(({ battle }) => ({ battle }))(App);
