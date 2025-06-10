import 'bootstrap/dist/css/bootstrap.min.css';
import FicheEntreprise from '../components/FicheEntreprise.jsx';
import Head from '../components/Head.jsx';
import Foot from "../components/Foot.jsx";
import Contact from '../components/Contact';
import React from 'react';



  

export default function Fiche() {
  return ( 
  <div>
    <Head />
    <FicheEntreprise />
    <div style={{marginTop: "-33rem"}}>
    <Contact />
    </div>
    <Foot />
    </div>
  )}