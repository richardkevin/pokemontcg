import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div className="footer">
        <small className="weaknesses">
          weakness
          {pokemon.weaknesses.map((weak) => (
            <div>{weak.type + " " + weak.value}</div>
          ))}
        </small>
        <small className="resistances">
          resistance
          {pokemon.resistances.map((resist) => (
            <div>{resist.type + " " + resist.value}</div>
          ))}
        </small>
        <small className="retreat">
          retreat cost
          <div>{pokemon.retreatCost.length}</div>
        </small>
      </div>
    );
  }
}
