import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Head from '../components/Head.jsx';
import Foot from "../components/Foot.jsx";
import Warning from '../components/Warning.jsx';

function Error() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/artisans-du-mois')
      .then(res => setArtisans(res.data))
      .catch(err => console.error(err));
  }, []);
return(
<div> 
 <Head />
 <Warning />

</div>

)

}

export default Error;