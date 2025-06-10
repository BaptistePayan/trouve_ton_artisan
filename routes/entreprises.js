const express = require('express');
const router = express.Router();
const db = require("../app/models");

//routes et requel sql pour catégorie Alimentation
router.get('/Alimentation', async (req, res) => {
  console.log('Route /Alimentation appelée !');
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM entreprises WHERE categorie_id = 1',
      { type: db.Sequelize.QueryTypes.SELECT }
    );
    console.log('Résultats :', results);
    res.json(results);
  } catch (err) {
    console.error('Erreur :', err);
    res.status(500).json({ error: err.message });
  }
});
//routes et requel sql pour catégorie Batiment
router.get('/Batiment', async (req, res) => {
  console.log('Route /Batiment appelée !');
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM entreprises WHERE categorie_id = 2',
      { type: db.Sequelize.QueryTypes.SELECT }
    );
    console.log('Résultats :', results);
    res.json(results);
  } catch (err) {
    console.error('Erreur :', err);
    res.status(500).json({ error: err.message });
  }
});
//routes et requel sql pour catégorie Fabrication
router.get('/Fabrication', async (req, res) => {
  console.log('Route /Fabrication appelée !');
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM entreprises WHERE categorie_id = 3',
      { type: db.Sequelize.QueryTypes.SELECT }
    );
    console.log('Résultats :', results);
    res.json(results);
  } catch (err) {
    console.error('Erreur :', err);
    res.status(500).json({ error: err.message });
  }
});
//routes et requel sql pour catégorie Services
router.get('/Services', async (req, res) => {
  console.log('Route /Services appelée !');
  try {
    const results = await db.sequelize.query(
      'SELECT * FROM entreprises WHERE categorie_id = 4',
      { type: db.Sequelize.QueryTypes.SELECT }
    );
    console.log('Résultats :', results);
    res.json(results);
  } catch (err) {
    console.error('Erreur :', err);
    res.status(500).json({ error: err.message });
  }
});


// de route GET pour récupérer une entreprise par ID (dynamique)
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.sequelize.query(`
      SELECT
        e.id,
        e.nom,
        e.note,
        e.a_propos,
        e.site_web,
        s.nom as specialite,
        v.nom as ville
      FROM entreprises e
      LEFT JOIN specialites s ON e.specialite_id = s.id
      LEFT JOIN villes v ON e.ville_id = v.id
      WHERE e.id = ?
    `, { replacements: [id] });

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Entreprise non trouvée' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});



module.exports = router;