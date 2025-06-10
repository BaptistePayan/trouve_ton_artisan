/*import React, { useState } from "react";

function Search() {
  const [showInput, setShowInput] = useState(false);

  // Détecte la largeur de l'écran pour afficher différemment
  const isMobile = window.innerWidth < 576; // Bootstrap xs < 576px

  const handleIconClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setShowInput(!showInput);
    }
  };

  return (
    <form
      className="mb-2 w-100 d-flex align-items-center"
      style={{ maxWidth: 250 }}
    >
      {/* Affichage sur mobile : loupe seule ou champ + loupe 
     /* {isMobile ? (
        <>
          {showInput ? (
            <input
              type="search"
              className="form-control"
              placeholder="Rechercher"
              autoFocus
              style={{
                border: "none",
                borderBottom: "2px solid #009ee0",
                borderRadius: 0,
                fontSize: "1.1rem",
                marginRight: 8,
              }}
              onBlur={() => setShowInput(false)}
            />
          ) : null}
          <button
            className="btn p-0"
            type="button"
            onClick={handleIconClick}
            aria-label="Ouvrir la recherche"
            style={{ borderBottom: "2px solid #009ee0" }}
          >
            {/* Ton SVG loupe /*
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
        </>
      ) : (
        // Affichage desktop : champ + bouton loupe
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
      )}
    </form>
  );
}

export default Search;*/

import React, { useState, useEffect } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Fonction pour chercher dans ta base de données
  const searchDatabase = async (searchTerm) => {
    if (searchTerm.length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/api/search?q=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      setResults(data);
      setShowResults(true);
    } catch (error) {
      console.error("Erreur de recherche:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Recherche avec délai pour éviter trop de requêtes
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      searchDatabase(query);
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchDatabase(query);
  };

  return (
    <div className="position-relative">
      <form
        className="mb-2 w-100"
        style={{ maxWidth: 250 }}
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Rechercher un artisan"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowResults(results.length > 0)}
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

      {/* Affichage des résultats */}
      {showResults && (
        <div 
          className="position-absolute bg-white border rounded shadow-sm w-100 mt-1"
          style={{ zIndex: 1000, maxHeight: "300px", overflowY: "auto" }}
        >
          {isLoading && (
            <div className="p-3 text-center">
              <small>Recherche en cours...</small>
            </div>
          )}
          
          {!isLoading && results.length > 0 && (
            <div className="p-2">
              {results.map((result) => (
                <div 
                  key={result.id} 
                  className="p-2 border-bottom cursor-pointer hover-bg-light"
                  onClick={() => {
                    // Tu peux rediriger vers la page de l'artisan
                    window.location.href = `/artisan/${result.id}`;
                  }}
                >
                  <div className="fw-bold">{result.nom}</div>
                  <small className="text-muted">
                    {result.specialite} • {result.ville}
                    {result.note && (
                      <span className="ms-2 badge bg-warning text-dark">
                        ⭐ {result.note}/5
                      </span>
                    )}
                  </small>
                </div>
              ))}
            </div>
          )}
          
          {!isLoading && results.length === 0 && query.length >= 2 && (
            <div className="p-3 text-center text-muted">
              <small>Aucun résultat trouvé pour "{query}"</small>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;

