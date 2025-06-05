import { Link } from "react-router-dom";



function Head() {
  return (
 <header className="bg-white py-2 py-md-4 px-3 border-bottom">
       <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
         {/*<div className="row align-items-center">*/}
           {/* Logo à gauche responsive */}
           <div className="d-flex align-items-center flex-grow-1">
           {/*<div className="col-6 col-md-2 d-flex align-items-center">*/}
           <Link className="navbar-brand" to="/"><img
               src="/img/logo.png"
               alt="Logo"
               style={{ height: "48px", maxWidth: "100%", objectFit: "contain" }}
               className="img-fluid"
             /></Link>
           </div>
           {/* Titre centré */}
           <div className="col-8 text-center">
             <h2 className="fw-bold mb-0" style={{ fontSize: "2.2rem" }}>
               Quoi de mieux
             </h2>
             <div style={{ fontSize: "1rem", color: "#82b864" }}>
               qu'un artisan <br />
               <span style={{ color: "#82b864", fontWeight: 500 }}>
                 de ta région
               </span>
             </div>
           </div>
           {/* Recherche et menu à droite */}
           <div className="col-2 d-flex flex-column align-items-end">
             {/* Barre de recherche */}
             <form className="mb-2 w-100" style={{ maxWidth: 250 }}>
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
             </form>
             {/* Menu horizontal */}
     
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
         <Link className="navbar-brand" to="/">Accueil</Link>
 
         {/* Bouton burger */}
         <button
           className="navbar-toggler"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#navbarNav"
           aria-controls="navbarNav"
           aria-expanded="false"
           aria-label="Toggle navigation"
         >
           <span className="navbar-toggler-icon"></span>
         </button>
 
         {/* Liens du menu */}
         <div className="collapse navbar-collapse" id="navbarNav">
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
           </div>
         </div>
       </div>
     </header>
  );
}

export default Head