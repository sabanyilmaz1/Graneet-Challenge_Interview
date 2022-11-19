const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  nomCommune: { type: String, required: true },
  codePostal: { type: Number, required: true },
});

module.exports = mongoose.model("City", citySchema);
