const { response } = require("express");
const City = require("../models/City");

exports.getCities = (req, res, next) => {
  City.find()
    .limit(100)
    .then((response) => {
      let overseas = response.filter((city) => city.codePostal >= 96000);
      let metropole = response.filter((city) => city.codePostal < 96000);
      return res
        .status(200)
        .send({ metropoleCities: metropole, overseasCities: overseas });
    })
    .catch((err) => {
      console.log("GET request err", err);
    });
  return;
};

exports.getCitiesBySearch = (req, res, next) => {
  let searchQuery = req.params.search;
  let overseasFiltered = [];
  let metropoleFiltered = [];
  City.find()
    .then((response) => {
      let overseas = response.filter((city) => city.codePostal >= 96000);
      let metropole = response.filter((city) => city.codePostal < 96000);
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
      return res.status(200).send({
        metropoleCities: metropoleFiltered,
        overseasCities: overseasFiltered,
      });
    })
    .catch((err) => {
      console.log("GET request err", err);
    });
  return;
};
