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

//config du port sur 8000 (certains port ne marchent pas sur mac)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}.`);
});

//synchronisation de la bdd
const db = require("./app/models");
db.sequelize.sync().then(() => {
  console.log("La base de données est synchronisée")
});

//récupere les donnée avec la methode sequelize et requete sql
app.get('/api/artisans-du-mois', (req, res) => {
  db.sequelize.query(
    `SELECT e.id, e.nom, e.note, s.nom AS specialite, v.nom AS ville
     FROM entreprises e
     JOIN specialites s ON e.specialite_id = s.id
     JOIN villes v ON e.ville_id = v.id
     WHERE e.top = 1
     ORDER BY e.note DESC
     LIMIT 3;`,
    { type: db.Sequelize.QueryTypes.SELECT }
  )
  .then(results => res.json(results))
  .catch(err => res.status(500).json({ error: err.message }));
});





