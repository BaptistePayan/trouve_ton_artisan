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
    <header className="bg-white py-4 px-3">
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
        marginBottom: "40px",
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
;
  
 

      
      
      <section>
       <Row className="justify-content-center my-4">
  {artisans.map((artisan, idx) => (
    <Col key={artisan.id} md={4} className="d-flex">
      <Card className="mb-4 flex-fill shadow-sm" style={{ background: "#f7fafd", borderRadius: "16px" }}>
        <Card.Body>
          <Card.Title className="mb-2">{artisan.nom}</Card.Title>
          <div className="mb-2">
            <span style={{ fontWeight: "bold" }}>{artisan.note}</span>
            <span className="ms-2" style={{ color: "#1886e7" }}>
              {"★".repeat(Math.round(artisan.note))}
              <span style={{ color: "#ccc" }}>
                {"★".repeat(5 - Math.round(artisan.note))}
              </span>
            </span>
          </div>
          <Card.Text className="mb-1">{artisan.specialite}</Card.Text>
          <Card.Text className="text-muted">{artisan.ville}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-transparent border-0 text-end">
          <Button variant="link" style={{ color: "#1886e7", textDecoration: "none" }}>
            <span className="fw-bold">→</span>
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  ))}
</Row>
<Button variant="primary" className="mt-2">Tous les artisans</Button>

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
