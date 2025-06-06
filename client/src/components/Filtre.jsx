import React from "react";

function Filtre() {
  return (
    
    <div className="container my-4">
      <h2 className="fw-bold mb-4 text-primary">Liste des artisans</h2>
      <div className="bg-light rounded-3 p-4">
        <div className="fw-bold mb-3 text-primary">Filtrer par</div>
        <form>
          <div className="row g-3 align-items-end">
            {/* Mots clés */}
            <div className="col-12 col-md-3">
              <label htmlFor="motcle" className="form-label text-muted mb-2">Mots clés</label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="motcle"
                placeholder="Rechercher..."
              />
            </div>
            
            {/* Spécialité */}
            <div className="col-12 col-md-3">
              <label htmlFor="specialite" className="form-label text-muted mb-2">Spécialité</label>
              <select className="form-select rounded-pill" id="specialite">
                <option value="">Toutes les spécialités</option>
                <option value="batiment">Bâtiment</option>
                <option value="services">Services</option>
                <option value="fabrication">Fabrication</option>
                <option value="alimentation">Alimentation</option>
              </select>
            </div>
            
            {/* Département */}
            <div className="col-12 col-md-3">
              <label htmlFor="departement" className="form-label text-muted mb-2">Département</label>
              <select className="form-select rounded-pill" id="departement">
                <option value="">Tous les départements</option>
                <option value="01">Ain (01)</option>
                <option value="03">Allier (03)</option>
                <option value="07">Ardèche (07)</option>
                <option value="15">Cantal (15)</option>
                <option value="26">Drôme (26)</option>
                <option value="38">Isère (38)</option>
                <option value="42">Loire (42)</option>
                <option value="43">Haute-Loire (43)</option>
                <option value="63">Puy-de-Dôme (63)</option>
                <option value="69">Rhône (69)</option>
                <option value="73">Savoie (73)</option>
                <option value="74">Haute-Savoie (74)</option>
              </select>
            </div>
            
            {/* Boutons */}
            <div className="col-12 col-md-3 d-flex gap-2">
              <button type="submit" className="btn btn-primary rounded-pill flex-grow-1">
                Appliquer
              </button>
              <button type="reset" className="btn btn-link text-primary flex-grow-1">
                Réinitialiser
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filtre;

{/*manque de connaissance pour filtrer, ça serait bien de le voir en cours*/}