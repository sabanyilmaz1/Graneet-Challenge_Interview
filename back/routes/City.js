const express = require("express");
const router = express.Router();

const CityCtrl = require("../controllers/City");

router.get("/", CityCtrl.getCities);

module.exports = router;
