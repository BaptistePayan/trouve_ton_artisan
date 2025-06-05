import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function Accueil() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/artisans-du-mois')
      .then(res => setArtisans(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
    {/* Haut de page */}
      <div>
    {/* Header principal */}
    <header className="bg-white py-1 px-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo à gauche */}
          <div className="col-2 d-flex align-items-center">
            <img
              src="/img/logo.png"
              alt="Logo"
              style={{ height: 96 }}
            />
          </div>
          {/* Titre centré */}
          <div className="col-8 text-center">
            <h2 className="fw-bold mb-0" style={{ fontSize: "2.2rem" }}>
              Quoi de mieux
            </h2>
            <div style={{ fontSize: "1rem", color: "#82b864" }}>
              qu'un artisan <br />
              <span style={{ color: "#82b864", fontWeight: 500 }}>
                de ta région
              </span>
            </div>
          </div>
          {/* Recherche et menu à droite */}
          <div className="col-2 d-flex flex-column align-items-end">
            {/* Barre de recherche */}
            <form className="mb-2 w-100" style={{ maxWidth: 250 }}>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Rechercher"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #009ee0",
                    borderRadius: 0,
                    fontSize: "1.1rem",
                  }}
                />
                <button
                  className="btn"
                  type="submit"
                  style={{ borderBottom: "2px solid #009ee0" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="#009ee0"
                    strokeWidth="2"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="7" cy="7" r="6" />
                    <line x1="11" y1="11" x2="15" y2="15" />
                  </svg>
                </button>
              </div>
            </form>
            {/* Menu horizontal */}
            <nav className="container-fluid">
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">Bâtiment</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">Fabrication</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">Alimentation</a>
      </li>
    </ul>
  </nav>
          </div>
        </div>
      </div>
    </header>

    {/* Bandeau bleu */}
    <div
      style={{
        background: "#00497c",
        color: "#fff",
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px",
        padding: "60px 0 80px 0",
        marginBottom: "60px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Titre à gauche */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className="fw-bold" style={{ fontSize: "2.1rem" }}>
              Comment trouver <br /> mon artisan&nbsp;?
            </h2>
          </div>
          {/* Liste à droite */}
          <div className="col-md-6">
            <ol className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <span
                  className="d-inline-flex justify-content-center align-items-center me-3"
                  style={{
                    background: "#1569a8",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  1
                </span>
                Choisir la catégorie d’artisanat dans le menu.
              </li>
              <li className="d-flex align-items-center mb-3">
                <span
                  className="d-inline-flex justify-content-center align-items-center me-3"
                  style={{
                    background: "#1569a8",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  2
                </span>
                Choisir un artisan.
              </li>
              <li className="d-flex align-items-center mb-3">
                <span
                  className="d-inline-flex justify-content-center align-items-center me-3"
                  style={{
                    background: "#1569a8",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  3
                </span>
                Le contacter via le formulaire de contact.
              </li>
              <li className="d-flex align-items-center">
                <span
                  className="d-inline-flex justify-content-center align-items-center me-3"
                  style={{
                    background: "#1569a8",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  4
                </span>
                Une réponse sera apportée sous 48h.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*body*/}
<section
    style={{
      background: "#fff",
      borderRadius: "60px",
      marginTop: "-140px",   // Superpose sur le header
      marginBottom: "-40px",// Superpose sur le footer
      boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
      zIndex: 2,
      position: "relative",
      padding: "48px 0 56px 0",
    }}
    className="container"
  >
    {/* Titre */}
    <div className="mb-5">
      <div
        style={{
          borderLeft: "6px solid #1886e7",
          paddingLeft: 12,
          fontWeight: 700,
          fontSize: "1.5rem",
          marginBottom: 8,
          color: "#00497c",
        }}
      >
        Artisans du mois
      </div>
    </div>

    {/* Cartes artisans */}
    <Row className="justify-content-center my-4">
      {artisans.map((artisan) => (
        <Col key={artisan.id} md={4} className="d-flex">
          <Card
            className="mb-4 flex-fill shadow-sm"
            style={{
              background: "#f7fafd",
              borderRadius: "16px",
              border: "none",
              minWidth: 0,
            }}
          >
            <Card.Body>
              <Card.Title className="mb-2">{artisan.nom}</Card.Title>
              <div className="mb-2">
                <span style={{ fontWeight: "bold" }}>{artisan.note}</span>
                <span className="ms-2" style={{ color: "#1886e7" }}>
                  {"★".repeat(Math.round(artisan.note))}
                </span>
                <span style={{ color: "#ccc" }}>
                  {"★".repeat(5 - Math.round(artisan.note))}
                </span>
              </div>
              <Card.Text className="mb-1">{artisan.specialite}</Card.Text>
              <Card.Text className="text-muted">{artisan.ville}</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-transparent border-0 text-end">
              <Button
                variant="link"
                style={{
                  color: "#1886e7",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                <span className="fw-bold">&rarr;</span>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>

    {/* Bouton central */}
    <div className="text-center">
      <Button variant="primary" className="mt-2">
        Tous les artisans
      </Button>
    </div>
  
  </section>

      <footer
    style={{
      background: "#0074c7",
      color: "#fff",
      padding: "48px 0 0 0",
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    }}
  >
    <div className="container">
      <div className="row align-items-start mb-4">
        {/* Bloc titre à gauche */}
       <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h2 className="fw-bold" style={{ fontSize: "2.2rem" }}>
            Trouve ton artisan&nbsp;!
          </h2>
          <div style={{ fontSize: "1.1rem", color: "#bde5ff", fontWeight: 600 }}>
            Avec la région <br />
            <span style={{ color: "#fff", fontWeight: 700 }}>
              Auvergne-Rhône-Alpes
            </span>
          </div>
        </div>
          
        {/* Bloc adresse à droite */}
        <div className="col-md-6 text-center text-md-center">
          <div className="fw-bold mb-2" style={{ fontSize: "1.1rem" }}>Lyon</div>
          <div>
            101 cours Charlemagne<br />
            CS 20033<br />
            69269 LYON CEDEX 02<br />
            France<br />
            +33 (0)4 26 73 40 00
          </div>
        </div>
      </div>

      {/* Ligne séparatrice */}
      <hr style={{ borderTop: "1px solid #bde5ff", opacity: 0.3 }} />

      {/* Liens du footer */}
      <div className="row">
        <div className="col-12">
          <ul className="nav justify-content-center flex-wrap" style={{ fontSize: "1rem" }}>
            <li className="nav-item">
              <a className="nav-link px-2 text-white-50" href="#">Mentions légales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 text-white-50" href="#">Données personnelles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 text-white-50" href="#">Données Accessibilité : partiellement conforme</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 text-white-50" href="#">Presse</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 text-white-50" href="#">Marchés publics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 text-white-50" href="#">Venir à la Région</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 text-white-50" href="#">Contacts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 text-white-50" href="#">Politique des cookies</a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ height: 32 }} /> {/* Pour l'espace en bas */}
    </div>
  </footer>
    </div>
  );
}
export default Accueil;
