//configuration du serveur express
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'application !" });
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}.`);
});

const db = require("./app/models");
db.sequelize.sync();

