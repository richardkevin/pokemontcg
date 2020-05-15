import React from "react";
import { connect } from "react-redux";

import Card from "./components/Card";
import "./App.css";

const App = (props) => {
  const { battle } = props;
  
  const [first, second] = Object.keys(battle);

  return (
    <div className="App">
      <Card pokemon={battle[first]} />
      <Card pokemon={battle[second]} enemy/>
    </div>
  );
};

export default connect(({ battle }) => ({ battle }))(App);
