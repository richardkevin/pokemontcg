import React, { Component } from "react";

import Card from "./components/Card";
import charizard from "./charizard.json";
import "./App.css";

class App extends Component {
  render() {
    return <Card pokemon={charizard} />;
  }
}

export default App;
