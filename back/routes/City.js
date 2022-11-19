const express = require("express");
const router = express.Router();

const CityCtrl = require("../controllers/City");

//Ce endPoint sera appelé si il n'y a aucun saisie
router.get("/", CityCtrl.getCities);

module.exports = router;
