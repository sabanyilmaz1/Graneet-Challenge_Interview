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
