import React from "react";
import "./CountCities.css";

export const CountCities = ({ count }) => {
  return (
    <div className={count > 0 ? "count--green" : "count--red"}>
      <span className="count--label">
        {count > 0
          ? `${count} correspondant au text saisi`
          : "Aucune ville correspondant au text saisi"}
      </span>
    </div>
  );
};
