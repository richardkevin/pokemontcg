import React from "react";

import energy from "../sprites/energy";

const TypeDamage = ({ type, value }) => (
  <div style={{ display: "flex" }}>
    <img src={energy[type]} className="pokemon__energy-cost" alt={type} /> {value}
  </div>
);

const Footer = ({ pokemon }) => {
  const { weaknesses = [], resistances = [], retreatCost = [] } = pokemon;

  return (
    <div className="pokemon__card-footer">
      <small className="pokemon__weaknesses">
        weakness
        <div>
          {weaknesses.map((attr) => (
            <TypeDamage {...attr} />
          ))}
        </div>
      </small>
      <small className="pokemon__resistances">
        resistance
        <div>
          {resistances.map((attr) => (
            <TypeDamage {...attr} />
          ))}
        </div>
      </small>
      <small className="pokemon__retreat">
        retreat cost
        <div>
          {retreatCost.map((type) => (
            <img src={energy[type]} className="pokemon__energy-cost" alt={type} />
          ))}
        </div>
      </small>
    </div>
  );
};

export default Footer;
