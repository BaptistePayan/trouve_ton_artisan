import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const palette = {
  bleuClair: '#f1f8fc',
  bleu: '#0074c7',
  bleuFonce: '#00497c',
  grisFonce: '#384050'
};

export default function Contact() {
  return (
    <div className="container py-5" style={{ background: '#fff' }}>
      <div className="mb-4" style={{ borderLeft: `6px solid ${palette.bleu}`, paddingLeft: 12 }}>
        <h2 style={{ color: palette.bleu, fontWeight: 700 }}>Envoyer un mail à cet artisan</h2>
      </div>
      <p className="mb-3" style={{ fontStyle: 'italic', color: palette.grisFonce }}>
        Les champs marqués d&apos;un astérisque (<span style={{ color: palette.bleu }}>*</span>) sont requis.
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label" style={{ color: palette.bleuFonce }}>
            Nom<span style={{ color: palette.bleu }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            required
            style={{
              borderColor: palette.bleu,
              background: palette.bleuClair,
              borderRadius: 20
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="objet" className="form-label" style={{ color: palette.bleuFonce }}>
            Objet<span style={{ color: palette.bleu }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="objet"
            required
            style={{
              borderColor: palette.bleu,
              background: palette.bleuClair,
              borderRadius: 20
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ color: palette.bleuFonce }}>
            email<span style={{ color: palette.bleu }}>*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            style={{
              borderColor: palette.bleu,
              background: palette.bleuClair,
              borderRadius: 20
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label" style={{ color: palette.bleuFonce }}>
            Votre message<span style={{ color: palette.bleu }}>*</span>
          </label>
          <textarea
            className="form-control"
            id="message"
            rows={5}
            required
            style={{
              borderColor: palette.bleu,
              background: palette.bleuClair,
              borderRadius: 20
            }}
          />
        </div>
        <div className="mb-4" style={{ color: palette.grisFonce, fontStyle: 'italic', fontSize: '0.95rem' }}>
          Les informations recueillies à partir de ce formulaire sont nécessaires aux services de la Région Auvergne-Rhône-Alpes pour la gestion de votre demande.<br />
          <a href="#" style={{ color: palette.bleu, textDecoration: 'underline' }}>
            Pour en savoir plus sur la gestion de vos données et vos droits.
          </a>
        </div>
        <button
          type="submit"
          className="btn"
          style={{
            background: palette.bleu,
            color: '#fff',
            borderRadius: 20,
            padding: '8px 32px',
            fontWeight: 500
          }}
        >
          Soumettre
        </button>
      </form>
    </div>
  );
}
