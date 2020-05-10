import React, { Component } from "react";

import Card from "./components/Card";
import charizard from "./charizard.json";
import gyarados from "./gyarados.json";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Card pokemon={charizard} />
        <Card pokemon={gyarados} />
      </div>
    );
  }
}

export default App;
