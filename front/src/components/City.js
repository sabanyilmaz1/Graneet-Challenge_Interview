import React from "react";
import "./City.css";

export const City = ({ nameCity, zipCode }) => {
  return (
    <div className="city">
      <div className="city--name">{nameCity}</div>
      <div className="city--zipcode">{zipCode}</div>
    </div>
  );
};
