import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alimentation from './pages/Alimentation';
import Batiment from "./pages/Batiment";
import Services from "./pages/Services";
import Fabrication from "./pages/Fabrication";
import Accueil from "./pages/Accueil";
import Error from "./pages/Error";
import Fiche from "./pages/Fiche";
import Liste from "./pages/Liste";
import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';



//point d'entrée (retranscription)
function App() {
  return(
  <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Alimentation" element={<Alimentation />} />
        <Route path="/Batiment" element={<Batiment />} />
        <Route path="/Fabrication" element={<Fabrication />} />
        <Route path="/Fiche" element={<Fiche />} />
        <Route path="/Liste" element={<Liste />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </Router>
  )
}




export default App;
