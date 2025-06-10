import { Link } from "react-router-dom";
import Burger from './Burger'
import Search from './Search'



function Head() {
  return (
    
 <header className="bg-white py-2 py-md-2 px-3 border-bottom mb-0 ">
       <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
         {/*<div className="row align-items-center">*/}
           {/* Logo à gauche responsive */}
           <div className="d-flex align-items-center col-4 ">
           {/*<div className="col-6 col-md-2 d-flex align-items-center">*/}
           <Link className="navbar-brand" to="/"><img
               src="/img/logo.png"
               alt="Logo"
               style={{maxWidth: "100%", objectFit: "contain" }}
               className="img-fluid"
             /></Link>
           </div>
           <Search />
{/* Menu horizontal */}
<Burger />
           
         </div>
       </div>
     </header>
  );
}

export default Head