const { response } = require("express");
const City = require("../models/City");

// Permet de recuperer les 100 premieres villes
exports.getCities = (req, res, next) => {
  City.find()
    .limit(100)
    .then((response) => {
      // On separe en 2 listes : les ville de metropoles et outre-mer
      let overseas = response.filter((city) => city.codePostal >= 96000);
      let metropole = response.filter((city) => city.codePostal < 96000);
      return (
        res
          .status(200)
          // On renvoie les villes filtrées
          .send({ metropoleCities: metropole, overseasCities: overseas })
      );
    })
    .catch((err) => {
      console.log("GET request err", err);
    });
  return;
};

// Permet de récupérer les villes en fonction de la recherche
exports.getCitiesBySearch = (req, res, next) => {
  let searchQuery = req.params.search;
  let overseasFiltered = [];
  let metropoleFiltered = [];
  City.find()
    .then((response) => {
      // Premier filtrage, on separe en 2 listes : les ville de metropoles et outre-mer
      let overseas = response.filter((city) => city.codePostal >= 96000);
      let metropole = response.filter((city) => city.codePostal < 96000);

      //Deuxieme filtrage, on garde seulement les villes dont le nom commence par la recherche
      overseas.forEach((line) => {
        if (
          line.codePostal == searchQuery ||
          line.nomCommune.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          overseasFiltered.push(line);
        }
      });
      metropole.forEach((line) => {
        if (
          line.codePostal == searchQuery ||
          line.nomCommune.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          metropoleFiltered.push(line);
        }
      });
      // On renvoie les villes filtrées en prenant seulement les 100 premieres
      return res.status(200).send({
        metropoleCities: metropoleFiltered.slice(0, 100),
        overseasCities: overseasFiltered.slice(0, 100),
      });
    })
    .catch((err) => {
      console.log("GET request err", err);
    });
  return;
};
