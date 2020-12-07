import React, {useState, useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Typography, Button, Container, Card, CardHeader, IconButton} from '@material-ui/core';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import Summaaja from './Summaaja';
import HaeMeno from './HaeMeno';
import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

// https://material-ui.com/components/tables/#data-table --> käytettiin apuna material-ui:n datagridiä, jolla 
// pystyy sorttaamaan sarakkeiden tiedot helposti nousevaksi ja laskevaksi
// alla kommenteissa on alkuperäinen himmeli, jossa oli id:n kanssa ongelmia ja jolla listasin menot
// Muokkaus-napista ei vaikuta tapahtuvan mitään, joten näkyy alert, jossa
// on rivin tiedot.

const useStyles = makeStyles({
  card: {
    marginTop: 15, 
    maxWidth: 500, minWidth: 200,
    color: indigo[700],
  },
});

function Menolista(props) {
  const classes = useStyles();
  const url = 'http://localhost:8080';

  const [viesti, setViesti] = useState('');
  const [menot, setMenot] = useState(props.menot);
  const [menoId, setId] = useState(0);
  const[summa, setSumma] = useState(0);

  const haeSumma = () => {
    let uusiSumma = <Summaaja summa = { menot}/>
    setSumma(uusiSumma);
  }

  useEffect( () => {
    haeSumma();
}, [menot])

  const poista = async (id) => {
    try {
     // Kutsu backista poistoa
     const response = await axios.get(url +'/meno/delete/' + id);

     // Jos se onnistui, päivitä käyttöliittymä
     if (response.status === 200) {
      // Aseta objektitaulukko kuntoon
      const uusiMenot = await menot.filter(meno => meno.id !== id);
      setMenot(uusiMenot);
      // Laita viesti kuntoon
      setViesti('Poisto onnistui');
     }
    } catch (error) {
      setViesti('Poisto ei onnistunut');
    }
  }

  //saa parametrinä rivin id:n
  const muokkaa = async (thisRow) => {
      //halutut tiedot saatiin ja alert toimi
      alert("Editoimisominaisuutta en saanut valmiiksi. Editoitavan menon id " + thisRow.id + ' muut tiedot: Määrä: ' + thisRow.maara + ', Muistiinpano: ' + thisRow.tarkennus + ', Kategoria: ' + thisRow.menotyyppiNimi + ', Päivämäärä: ' + thisRow.pvm);
      setId(thisRow.id);
      //tämä ei taida toimia?
      return (<HaeMeno menoId={menoId}/>) //(<Link to= '/meno/muokkaa/:id' menoId={menoId}/>)
  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'menotyyppiNimi', headerName: 'Menotyyppi', width: 200 },
        { field: 'tarkennus', headerName: 'Tarkennus', width: 200 },
        {
          field: 'maara',
          headerName: 'Määrä',
          type: 'number',
          width: 100,
        },
        {
            field: 'pvm',
            headerName: 'Päivämäärä',
            type: 'date',
            width: 150,
          },
          {
            field: "Muokkaa",
            headerName: "Muokkaa",
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params: CellParams) => (
              <Button 
                color='primary'
                variant='outlined'
                onClick={() => {
                  //setOpen(true);
                  const api: GridApi = params.api;
                  const fields = api
                    .getAllColumns()
                    .map((c) => c.field)
                    .filter((c) => c !== "__check__" && !!c);
                  const thisRow = {};
      
                  fields.forEach((f) => {
                    thisRow[f] = params.getValue(f);
                  });

                muokkaa(thisRow);
                  
                }}>
                <EditIcon/>
              </Button>
            )
          },
          {
            field: "Poista",
            headerName: "Poista",
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params: CellParams) => (
              <Button
                color='secondary'
                variant='outlined'
                onClick={() => {
                  const api: GridApi = params.api;
                  const fields = api
                    .getAllColumns()
                    .map((c) => c.field)
                    .filter((c) => c !== "__check__" && !!c);
                  const thisRow = {};
      
                  fields.forEach((f) => {
                    thisRow[f] = params.getValue(f);
                  });
      
                  poista(thisRow.id);
                }}
              >
                <DeleteIcon/>
              </Button>
            )
          }
      ];

      const rows = menot;

      return (

        <div>
          <Container class='center'>
            <Card className={classes.card}>
            <CardHeader
                  title={`Olet käyttänyt yhteensä`}
                  subheader={ summa }
            />
          </Card>
          </Container>
            <Typography variant='h6' color='secondary'>Menot</Typography>
            <IconButton component={ Link } to='/lisaa'>
            <AddIcon/>
            </IconButton>
            <div style={{ height: 500, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} pageSize={10} />
            </div>
            <div>{viesti}</div>
        </div>
      );    
}


export default Menolista; 

   /* aiempi tapa listata menot:
    return ( 
        
        <div>
        <Container>
            <Typography variant='h6' color='secondary'>Menot</Typography>
        <p></p>
        <TableContainer component={Paper} color='primary'>
            <Table aria-label="menojen listaus">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Menotyyppi</TableCell>
                    <TableCell>Tarkennus</TableCell>
                    <TableCell>Määrä</TableCell>
                    <TableCell>Päivämäärä</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>

            { props.menot.map( (tapahtuma, index) => {
                return (
                    
                        <TableRow>
                            <TableCell key = { tapahtuma.tapahtuma_id }>{ tapahtuma.tapahtuma_id} </TableCell>
                            <TableCell key = { tapahtuma.tapahtuma_id.toString() + tapahtuma.menotyyppiNimi + index.toString()}>{tapahtuma.menotyyppiNimi}</TableCell>
                            <TableCell key = { tapahtuma.tapahtuma_id.toString() + tapahtuma.tarkennus + index.toString() }>{tapahtuma.tarkennus}</TableCell> 
                            <TableCell key = { tapahtuma.tapahtuma_id.toString() + tapahtuma.maara + index.toString()}>{ tapahtuma.maara } </TableCell>
                            <TableCell key = { tapahtuma.tapahtuma_id.toString() + tapahtuma.pvm.toString() + index.toString() }>{ tapahtuma.pvm}</TableCell>
                        </TableRow>
                );
            })
            }
            <TableRow>
                <TableCell>Yhteensä</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell key='summa'>{ <Summaaja summa = { props.menot}/>}</TableCell>
                <TableCell></TableCell>
            </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        </Container>
        </div>
        );
        */