import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Accueil() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/artisans-du-mois')
      .then(res => setArtisans(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <header>
        <h1>Trouve ton artisan !</h1>
        <p>Avec la région <span style={{color: "#1886e7"}}>Auvergne-Rhône-Alpes</span></p>
      </header>

      <section>
        <h2>Comment trouver mon artisan ?</h2>
        <ol>
          <li>Choisir la catégorie d’artisan dans le menu.</li>
          <li>Choisir un artisan.</li>
          <li>Le contacter via le formulaire de contact.</li>
          <li>Une réponse sera apportée sous 48h.</li>
        </ol>
      </section>

      <section>
        <h2>Artisans du mois</h2>
        <div style={{display: 'flex', gap: '2rem'}}>
          {artisans.map(a => (
            <div key={a.id} style={{
              background: '#f7fafd', borderRadius: '16px', padding: '2rem', minWidth: '250px'
            }}>
              <h3>{a.nom}</h3>
              <div>
                <span style={{fontWeight: 'bold'}}>{a.note}</span>
                <span> ★★★★★</span>
              </div>
              <div>{a.specialite}</div>
              <div>{a.ville}</div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary mt-4">Tous les artisans</button>
      </section>

      <footer style={{background: '#1886e7', color: 'white', padding: '2rem', marginTop: '2rem'}}>
        <h2>Trouve ton artisan !</h2>
        <address>
          Lyon<br/>
          101 cours Charlemagne<br/>
          CS 20033<br/>
          69286 LYON CEDEX 02<br/>
          France<br/>
          +33 (0)4 26 73 40 00
        </address>
        <div>
          <a href="#">Mentions légales</a> | <a href="#">Données personnelles</a> | ...
        </div>
      </footer>
    </div>
  );
  
}


export default Accueil;
