import React from "react";

export default function HistoryDashboard({ history }) {
  return (
    <div className="history-dashboard">
      {history.map(
        (
          { ability, atk, damage, fainted, name, resistances, weaknesses },
          idx
        ) => (
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
      )}
    </div>
  );
}
