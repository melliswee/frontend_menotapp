import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Menolista from './Menolista';
//import Jaottelija from './Jaottelija';
  const url = 'http://localhost:8080';

  function HaeMenot () {
   
   const [menot, setMenot] = useState([]);
   const [virhe, setVirhe] = useState('Haetaan');

   const haeKaikkiMenot = async () => {
    try {
      const response = await fetch(url + '/listaa/all');
      const json = await response.json();
      setMenot(json);
      setVirhe('');
    } catch (error) {
      setMenot([]);
      setVirhe('Tietojen haku ei onnistunut');
    }
  }
  
   useEffect( () => {
        haeKaikkiMenot();
   }, [])

   
   if (virhe.length > 0) {
     return ( <Typography>{ virhe }</Typography> );
   }
   
   if (menot.length > 0) {
     return ( <Menolista menot={ menot } />/*, <Jaottelija menot={menot}/> */);
   }

   return ( <Typography>Yhtään menoa ei ole</Typography> );
  }
  
  export default HaeMenot;
