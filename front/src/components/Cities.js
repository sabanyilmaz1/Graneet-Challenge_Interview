import React from "react";
import "./Cities.css";

import { CountCities } from "./CountCities";
import { City } from "./City";

export const Cities = ({ title, cities }) => {
  return (
    <div className="cities">
      <div className="cities--title">{title}</div>
      <CountCities count={cities ? cities.length : 0} />
      <div className="cities--list">
        {cities
          ? cities.map((city) => (
              <City
                key={city._id}
                nameCity={city.nomCommune}
                zipCode={city.codePostal}
              />
            ))
          : "Loading"}
      </div>
    </div>
  );
};
