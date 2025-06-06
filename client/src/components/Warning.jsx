import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Palette imposée
const palette = {
  bleuClair: "#f1f8fc",
  bleu: "#0074c7",
  bleuFonce: "#00497c",
  grisFonce: "#384050"
};

export default function Warning() {
  return (
    <div style={{
      minHeight: "100vh",
      background: palette.bleuClair,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      {/* Ligne supérieure */}
      <div style={{
        borderTop: `2px dotted ${palette.bleu}`,
        width: "100%",
        marginBottom: 0
      }} />

      <Container fluid className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Row className="w-100">
          <Col xs={12} className="text-center">
            {/* Titre */}
            <h1 style={{
              color: palette.bleuFonce,
              fontWeight: 700,
              fontSize: "2.5rem",
              marginBottom: 12
            }}>
              Erreur 404
            </h1>
            {/* Sous-titre */}
            <div style={{
              color: palette.grisFonce,
              fontSize: "1.3rem",
              marginBottom: 24
            }}>
              Page non trouvée...
            </div>
            {/* Icône triangle */}
            <div style={{ margin: "32px 0" }}>
              <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
                <polygon points="60,10 110,90 10,90" fill="none" stroke={palette.grisFonce} strokeWidth="5" />
                <text x="60" y="72" textAnchor="middle" fontSize="56" fill={palette.bleu} fontWeight="bold">!</text>
              </svg>
            </div>
            {/* Bouton */}
            <Button
              href="/"
              style={{
                background: palette.bleu,
                border: "none",
                borderRadius: 22,
                padding: "10px 32px",
                fontWeight: 500,
                fontSize: "1.1rem"
              }}
            >
              Retourner à la page d’accueil
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Footer graphique */}
      <div style={{
        width: "100%",
        background: palette.bleu,
        height: 56,
        position: "relative",
        borderTopLeftRadius: 48,
        borderTopRightRadius: 0,
        marginTop: 40
      }}>
        <svg
          width="100%"
          height="56"
          viewBox="0 0 100 56"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: 0, left: 0 }}
        >
          <path
            d="M0,56 Q10,0 100,0 L100,56 Z"
            fill={palette.bleu}
          />
        </svg>
      </div>
    </div>
  );
}
