import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Head from '../components/Head.jsx';
import Foot from "../components/Foot.jsx";

function Batiment() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/entreprises/Batiment')
      .then(res => setArtisans(res.data))
      .catch(err => console.error(err));
  }, []);

return(
<div> 
 <Head />
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
      <Link to="/Liste" className="nav-link">
      <Button variant="primary" className="mt-2">
        Tous les artisans
      </Button>
      </Link>
    </div>
    <Foot />
</div>

)
}
export default Batiment;