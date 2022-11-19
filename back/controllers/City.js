const City = require("../models/City");

exports.getCities = (req, res, next) => {
  City.find()
    .limit(300)
    .then((city) => {
      res.status(200).json(city);
    })
    .then((response) => {
      let overseas = response.filter((city) => city.codePostal >= 96000);
      let metropole = response.filter((city) => city.codePostal < 96000);
      return res
        .status(200)
        .send({ metropoleCities: metropole, overseasCities: overseas });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
