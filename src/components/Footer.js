import React from "react";

import energy from "../sprites/energy";

export const TypeDamage = ({ type, value }) => (
  <div style={{ display: "flex" }}>
    <img src={energy[type]} className="pokemon__energy-cost" alt={type} />
    <span>{value}</span>
  </div>
);

const Footer = ({ pokemon }) => {
  const { weaknesses = [], resistances = [], retreatCost = [] } = pokemon;

  return (
    <div className="pokemon__card-footer">
      <small className="pokemon__weaknesses">
        weakness
        <div>
          {weaknesses.map((attr, idx) => (
            <TypeDamage {...attr} key={idx} />
          ))}
        </div>
      </small>
      <small className="pokemon__resistances">
        resistance
        <div>
          {resistances.map((attr, idx) => (
            <TypeDamage {...attr} key={idx} />
          ))}
        </div>
      </small>
      <small className="pokemon__retreat">
        retreat cost
        <div>
          {retreatCost.map((type, idx) => (
            <img
              src={energy[type]}
              key={idx}
              className="pokemon__energy-cost"
              alt={type}
            />
          ))}
        </div>
      </small>
    </div>
  );
};

Footer.defaultProps = {
  pokemon: {}
}

export default Footer;
