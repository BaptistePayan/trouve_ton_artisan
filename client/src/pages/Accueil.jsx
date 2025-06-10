import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Head from '../components/Head.jsx';
import Foot from '../components/Foot.jsx';



function Accueil() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/artisans-du-mois')
      .then(res => setArtisans(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
<div>
<Head />
<div>
    {/* Bandeau bleu */}
    <div
      style={{
        background: "#00497c",
        color: "#fff",
        padding: "60px 0 80px 0",
        marginBottom: "80px",
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
              <Link 
                  to={`/entreprise/${artisan.id}`}
                  style={{
                    color: "#0074c7",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  <span className="fw-bold">&rarr;</span>
                </Link>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
       {/* Bouton central */}
    <div className="text-center">
      <Link to="/Liste" className="nav-link">
      <Button variant="primary" className="mt-2">
        Tous les Artisans
        </Button>
      </Link>
    </div>
  </section>
<Foot />
</div>
  );
}
export default Accueil;
