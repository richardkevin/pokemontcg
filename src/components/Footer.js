import React from "react";

import energy from "../sprites/energy";

const TypeDamage = ({ type, value }) => (
  <>
    <img src={energy[type]} className="energy__cost" alt={type} /> {value}
  </>
);

const Footer = ({ pokemon }) => {
  return (
    <div className="footer">
      <small className="weaknesses">
        weakness
        <div>
          {pokemon.weaknesses.map((attr) => (
            <TypeDamage {...attr} />
          ))}
        </div>
      </small>
      <small className="resistances">
        resistance
        <div>
          {pokemon.resistances.map((attr) => (
            <TypeDamage {...attr} />
          ))}
        </div>
      </small>
      <small className="retreat">
        retreat cost
        <div>
          {pokemon.retreatCost.map((type) => (
            <img src={energy[type]} className="energy__cost" alt={type} />
          ))}
        </div>
      </small>
    </div>
  );
};

export default Footer;
