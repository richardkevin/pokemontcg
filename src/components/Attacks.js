import React from "react";

import energy from "../sprites/energy";

const Attacks = ({ pokemon }) => {
  const { ability, attacks } = pokemon;

  return (
    <div className="attacks">
      {ability && (
        <div>
          <small className="ability__type">{ability.type}</small>
          <span className="ability__name">{ability.name}</span>
          <p className="attack__description">{ability.text}</p>
        </div>
      )}
      {attacks.map((atk) => (
        <div key={atk.name.replace(" ", "-")}>
          <span className="attack__cost">
            {atk.cost.map((type) => (
              <img src={energy[type]} className="energy__cost" alt={type} />
            ))}
          </span>
          <span className="attack__name">{atk.name}</span>
          <span className="attack__damage right">{atk.damage}</span>
          <p className="attack__description">{atk.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Attacks;
