import React from "react";

import energy from "../energy";

const TypeDamage = ({ type, value }) => (
  <span>
    {console.log(type)}
    <img src={energy[type]} className="energy__cost" alt={type} /> {value}
  </span>
);

const Footer = ({ pokemon }) => {
  return (
    <div className="footer">
      <small className="weaknesses">
        weakness
        {pokemon.weaknesses.map((attr) => (
          <TypeDamage {...attr} />
        ))}
      </small>
      <small className="resistances">
        resistance
        {pokemon.resistances.map((attr) => (
          <TypeDamage {...attr} />
        ))}
      </small>
      <small className="retreat">
        retreat cost
        <div>
          {pokemon.retreatCost.map((type) => (
            <img src={energy[type]} className="energy__cost" alt={type} />
          ))}
          }
        </div>
      </small>
    </div>
  );
};

export default Footer