import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Head from '../components/Head.jsx';
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