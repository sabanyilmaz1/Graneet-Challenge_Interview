const City = require("../models/City");

exports.getCities = (req, res, next) => {
  City.find()
    .then((city) => {
      res.status(200).json(city);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
