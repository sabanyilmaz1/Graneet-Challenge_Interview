const express = require("express");
const router = express.Router();

const CityCtrl = require("../controllers/City");

//Ce endPoint sera appelé si il n'y a aucun saisie
router.get("/", CityCtrl.getCities);

//Ce endPoint sera appelé si il y a une saisie dans la barre de recheche
router.get("/:search", CityCtrl.getCitiesBySearch);

module.exports = router;
