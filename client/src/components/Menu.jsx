import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1"> <Link to="/Batiment" className="nav-link active py-3 px-0 px-lg-3 rounded">Batiment</Link> </li>
              <li className="nav-item mx-0 mx-lg-1"> <Link to="/Services"className="nav-link active py-3 px-0 px-lg-3 rounded" >Services</Link></li>
              <li className="nav-item mx-0 mx-lg-1"> <Link to="/Fabrication" className="nav-link active py-3 px-0 px-lg-3 rounded">Fabicration</Link></li>
              <li className="nav-item mx-0 mx-lg-1"> <Link to="/Alimentation" className="nav-link active py-3 px-0 px-lg-3 rounded">Alimentation</Link></li>
               <li className="nav-item mx-0 mx-lg-1"> <Link to="/" className="nav-link active py-3 px-0 px-lg-3 rounded">Batiment</Link> </li>
              <li className="nav-item mx-0 mx-lg-1"> <Link to="/"className="nav-link active py-3 px-0 px-lg-3 rounded" >Services</Link></li>
              <li className="nav-item mx-0 mx-lg-1"> <Link to="/" className="nav-link active py-3 px-0 px-lg-3 rounded">Fabicration</Link></li>
              <li className="nav-item mx-0 mx-lg-1"> <Link to="/" className="nav-link active py-3 px-0 px-lg-3 rounded">Alimentation</Link></li>
            </ul>
</div>
</nav>
  );
}

export default Menu