import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchPokemon } from "./reducers/actions";
import Card from "./components/Card";
import "./App.css";

const HistoryDashboard = ({ history }) => {
  const renderMove = history.map(
    ({ ability, atk, damage, fainted, name, resistances, weaknesses }, idx) => (
      <div key={idx}>
        {ability ? (
          ability
        ) : (
          <React.Fragment>
            <div>{`${name} used ${atk.name} and caused ${atk.damage} damage`}</div>
            {resistances && <div>{resistances}</div>}
            {weaknesses && <div>{weaknesses}</div>}
            {<div>{fainted || damage}</div>}
          </React.Fragment>
        )}
      </div>
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
    if (!move.ability) {
      setTurn(() => turn + 1);
      setMyTurn(!myTurn);
    }
  };

  useEffect(() => {
    // dispatch(fetchPokemon("left"));
    // dispatch(fetchPokemon("right"));
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
