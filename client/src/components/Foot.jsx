import { Link } from "react-router-dom";

function Foot () {
    return(

<footer
    style={{
      background: "#0074c7",
      color: "#fff",
      padding: "48px 0 0 0",
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    }}
  >
    <div className="container">
      <div className="row align-items-start mb-4">
        {/* Bloc titre à gauche */}
       <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h2 className="fw-bold" style={{ fontSize: "2.2rem" }}>
            Trouve ton artisan&nbsp;!
          </h2>
          <div style={{ fontSize: "1.1rem", color: "#bde5ff", fontWeight: 600 }}>
            Avec la région <br />
            <span style={{ color: "#fff", fontWeight: 700 }}>
              Auvergne-Rhône-Alpes
            </span>
          </div>
        </div>
          
        {/* Bloc adresse à droite */}
        <div className="col-md-6 text-center text-md-center">
          <div className="fw-bold mb-2" style={{ fontSize: "1.1rem" }}>Lyon</div>
          <div>
            101 cours Charlemagne<br />
            CS 20033<br />
            69269 LYON CEDEX 02<br />
            France<br />
            +33 (0)4 26 73 40 00
          </div>
        </div>
      </div>

      {/* Ligne séparatrice */}
      <hr style={{ borderTop: "1px solid #bde5ff", opacity: 0.3 }} />

      {/* Liens du footer */}
  {/* Liens du footer */}
      <div className="row">
        <div className="col-12">
          <ul className="nav justify-content-center flex-wrap" style={{ fontSize: "1rem" }}>
            <li className="nav-item">
              <Link to="/Warning" className="nav-link">
              <a className="nav-link px-2 text-white-50" href="#">Mentions légales</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Warning" className="nav-link">
              <a className="nav-link px-2 text-white-50" href="#">Données personnelles</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Warning" className="nav-link">
              <a className="nav-link px-2 text-white-50" href="#">Données Accessibilité : partiellement conforme</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Warning" className="nav-link">
              <a className="nav-link px-2 text-white-50" href="#">Presse</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Warning" className="nav-link">
              <a className="nav-link px-2 text-white-50" href="#">Marchés publics</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Warning" className="nav-link">
              <a className="nav-link px-2 text-white-50" href="#">Venir à la Région</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Warning" className="nav-link">
              <a className="nav-link px-2 text-white-50" href="#">Contacts</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Warning" className="nav-link">
              <a className="nav-link px-2 text-white-50" href="#">Politique des cookies</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ height: 32 }} /> {/* Pour l'espace en bas */}
    </div>
  </footer>

    )
}

export default Foot;