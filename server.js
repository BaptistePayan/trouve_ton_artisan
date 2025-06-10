//configuration du serveur express
const express = require("express");
const cors = require("cors");
const app = express();

const entreprisesRoutes = require('./routes/entreprises');
app.use('/api/entreprises', entreprisesRoutes);
console.log('Fichier entreprises.js chargé:', entreprisesRoutes);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'application !" });
});

//config du port sur 8000 (certains port ne marchent pas sur mac)
const PORT = process.env.PORT || 8000;

//synchronisation de la bdd
const db = require("./app/models");
db.sequelize.sync().then(() => {
  console.log("La base de données est synchronisée")
  app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}.`);
});
});

app.get('/api/search', (req, res) => {
  const searchTerm = req.query.q || '';
  
  if (searchTerm.length < 2) {
    return res.json([]);
  }

  db.sequelize.query(
    `SELECT e.id, e.nom, e.note, s.nom AS specialite, v.nom AS ville 
     FROM entreprises e 
     JOIN specialites s ON e.specialite_id = s.id 
     JOIN villes v ON e.ville_id = v.id 
     WHERE e.nom LIKE :search 
        OR s.nom LIKE :search 
        OR v.nom LIKE :search 
     ORDER BY e.note DESC 
     LIMIT 10`,
    {
      replacements: { search: `%${searchTerm}%` },
      type: db.sequelize.QueryTypes.SELECT
    }
  )
  .then(results => res.json(results))
  .catch(err => {
    console.error('Erreur de recherche:', err);
    res.status(500).json({ error: 'Erreur lors de la recherche' });
  });
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

app.get('/api/entreprises', (req, res) => {
  db.sequelize.query(
    `SELECT e.id, e.nom, e.note, s.nom AS specialite, v.nom AS ville
     FROM entreprises e
     JOIN specialites s ON e.specialite_id = s.id
     JOIN villes v ON e.ville_id = v.id
     ORDER BY e.id ASC;`,
    { type: db.Sequelize.QueryTypes.SELECT }
  )
  .then(results => res.json(results))
  .catch(err => res.status(500).json({ error: err.message }));
})


