const express = require("express");

const mongoose = require("mongoose");
const connect = require("./connection");

const cityRoutes = require("./routes/City");
const City = require("./models/City");
const data = require("./codes-postaux.json");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  // Ajoute les headers pour eviter les erreurs CORS
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

// Au lancement du serveur, si la base de donnée
// est vide, alors on ajoute les données de code-postaux.json
app.use((req, res, next) => {
  addDataInDB();
  next();
});

// Routes
app.use("/api/city", cityRoutes);

// Connexion à la base de donnée
mongoose
  .connect(connect().toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Recupere les données de code-postaux.json et remplit la base de donnée
const addDataInDB = () => {
  let result = [];
  let dataNumber = 0;
  for (let i = 0; i < data.length; i++) {
    result.push(data[i]);
  }
  // Recuperer le nombre d'élements dans le document City
  City.countDocuments({}).then((res) => {
    console.log(res);
    if (res == 0) {
      // Si il n'y a pas d'élement, on ajoute les données dans la bd
      City.insertMany(result)
        .then(() => {
          console.log("remplissage de la bd fini !");
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
