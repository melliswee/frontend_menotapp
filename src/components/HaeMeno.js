import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import MenolomakeEdit from './MenolomakeEdit';
  const url = 'http://localhost:8080';

  // Komponentin tarkoitus olisi hakea muokattava meno tietokannasta id:n avulla ja sitten lähettää se 
  // muokkauslomakkeelle (MenolomakeEdit), jossa muokkaus ja sen tallennus tapahtuu.
  // Muokkaus-napista ei kuitenkaan vaikuta tapahtuvan mitään, joten näkyy alert, jossa
  // on rivin tiedot.
  function HaeMeno (props) {
   
   const [meno, setMeno] = useState({});
   const [virhe, setVirhe] = useState('Haetaan');

   const haeMeno = async (props) => {
    try {
      const response = await fetch(url + '/meno/one/'+ props.menoId);
      const json = await response.json();
      setMeno(json);
      setVirhe('');
    } catch (error) {
      setMeno({});
      setVirhe('Tietojen haku ei onnistunut');
    }
  }
  
   useEffect( () => {
        haeMeno();
   }, [])

   
   if (virhe.length > 0) {
     return ( <Typography>{ virhe }</Typography> );
   }
   
   if (meno.length > 0) {
     return ( <MenolomakeEdit meno={ meno } /> );
   }

   return ( <Typography>Menoa ei ole olemassa</Typography> );
  }
  
  export default HaeMeno;