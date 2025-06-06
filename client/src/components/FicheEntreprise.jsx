import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


// Couleurs
const COLORS = {
  light: "#f1f8fc",
  blue: "#0074c7",
  blueDark: "#00497c",
  dark: "#384050"
};

function renderStars(note) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (note >= i) {
      stars.push(<span key={i} style={{ color: COLORS.blue, fontSize: 28 }}>★</span>);
    } else if (note > i - 1 && note < i) {
      stars.push(
        <span key={i} style={{ color: COLORS.blue, fontSize: 28, position: "relative", display: "inline-block", width: 28 }}>
          <span style={{ position: "absolute", width: "50%", overflow: "hidden" }}>★</span>
          <span style={{ color: "#ccc" }}>★</span>
        </span>
      );
    } else {
      stars.push(<span key={i} style={{ color: "#ccc", fontSize: 28 }}>★</span>);
    }
  }
  return stars;
}

export default function FicheEntreprise() {
  const { id } = useParams();
  const [entreprise, setEntreprise] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/entreprises/${id}`)
      .then(res => res.json())
      .then(setEntreprise);
  }, [id]);

  if (!entreprise) return <div>Chargement...</div>;

  return (
    <div style={{ background: COLORS.light, minHeight: "100vh", padding: "32px 0" }}>
      <div style={{ maxWidth: 500, margin: "0 auto", background: "#fff", borderRadius: 16, padding: 32 }}>
        <h1 style={{ color: COLORS.blue, fontWeight: "bold", textAlign: "center", marginBottom: 0 }}>
          {entreprise.nom}
        </h1>
        <div style={{
          height: 6,
          width: 48,
          background: COLORS.blue,
          margin: "24px auto 0 auto",
          borderRadius: 3
        }} />
        <h2 style={{
          color: COLORS.blue,
          fontWeight: "bold",
          textAlign: "center",
          margin: "16px 0 24px 0"
        }}>A propos</h2>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <span style={{ fontWeight: "bold", color: COLORS.dark, fontSize: 20, marginRight: 8 }}>{entreprise.note}</span>
          {renderStars(entreprise.note)}
        </div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ fontWeight: "bold", color: COLORS.dark }}>Spécialité&nbsp;:</span>
          <span style={{ color: COLORS.dark, marginLeft: 4 }}>{entreprise.specialite}</span>
        </div>
        <div style={{ marginBottom: 32 }}>
          <span style={{ fontWeight: "bold", color: COLORS.dark }}>Localisation&nbsp;:</span>
          <span style={{ color: COLORS.dark, marginLeft: 4 }}>{entreprise.ville}</span>
        </div>
        <div>
          <div style={{
            height: 6,
            width: 48,
            background: COLORS.blue,
            margin: "32px auto 0 auto",
            borderRadius: 3
          }} />
          <h2 style={{
            color: COLORS.blue,
            fontWeight: "bold",
            textAlign: "center",
            margin: "16px 0 24px 0"
          }}>Site web</h2>
          {entreprise.site_web ? (
            <a
              href={entreprise.site_web}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: COLORS.blue,
                color: "#fff",
                padding: "10px 24px",
                borderRadius: 24,
                textDecoration: "none",
                fontWeight: "bold",
                marginLeft: "50%",
                transform: "translateX(-50%)"
              }}
            >
              Visiter le site
            </a>
          ) : (
            <div style={{ color: COLORS.dark, fontWeight: 500, textAlign: "left", marginLeft: 0 }}>
              Non disponible
            </div>
          )}
        </div>
      </div>

    </div>
    
  );
}