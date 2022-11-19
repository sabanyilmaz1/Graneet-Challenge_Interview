const express = require("express");

const mongoose = require("mongoose");
const connect = require("./connection");

const cityRoutes = require("./routes/City");
const City = require("./models/City");
const data = require("./codes-postaux.json");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use((req, res, next) => {
  addDataInDB();
  next();
});

app.use("/api/city", cityRoutes);

mongoose
  .connect(connect().toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const addDataInDB = () => {
  let result = [];
  let dataNumber = 0;
  for (let i = 0; i < data.length; i++) {
    result.push(data[i]);
  }
  City.countDocuments({}).then((res) => {
    console.log(res);
    if (res == 0) {
      City.insertMany(result)
        .then(() => {
          console.log("remplissage db done !");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("la bd est deja rempli");
    }
  });
};

module.exports = app;
