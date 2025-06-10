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

function Services() {
  const [entreprises, setEntreprises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/entreprises/Services')
      .then(res => setEntreprises(res.data))
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
      {entreprises.map((entreprise) => (
        <Col key={entreprise.id} md={4} className="d-flex">
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
              <Card.Title className="mb-2">{entreprise.nom}</Card.Title>
              <div className="mb-2">
                <span style={{ fontWeight: "bold" }}>{entreprise.note}</span>
                <span className="ms-2" style={{ color: "#1886e7" }}>
                  {"★".repeat(Math.round(entreprise.note))}
                </span>
                <span style={{ color: "#ccc" }}>
                  {"★".repeat(5 - Math.round(entreprise.note))}
                </span>
              </div>
              <Card.Text className="mb-1">{entreprise.specialite}</Card.Text>
              <Card.Text className="text-muted">{entreprise.ville}</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-transparent border-0 text-end">
             <Link 
                               to={`/entreprise/${entreprise.id}`}
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
        Tous les artisans
      </Button>
      </Link>
    </div>
    <Foot />
</div>

)



}
export default Services;