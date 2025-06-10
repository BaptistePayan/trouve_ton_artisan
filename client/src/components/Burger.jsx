import React, { useState } from "react";
import { Link } from "react-router-dom";

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Accueil</Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/Batiment" className="nav-link">Bâtiment</Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/Fabrication" className="nav-link">Fabrication</Link>
            </li>
            <li className="nav-item">
              <Link to="/Alimentation" className="nav-link">Alimentation</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Burger;
