import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Typography, Button} from '@material-ui/core';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

//import MenolomakeEdit from './MenolomakeEdit';
//import TextField from '@material-ui/core/TextField';
//import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
//import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';

//https://material-ui.com/components/tables/#data-table --> käytettiin apuna material-ui:n datagridiä, jolla 
// pystyy sorttaamaan sarakkeiden tiedot helposti nousevaksi ja laskevaksi
//alla kommenteissa on alkuperäinen himmeli, jossa oli id:n kanssa ongelmia ja jolla listasin menot
function Menolista(props) {

  const url = 'http://localhost:8080';

  const [viesti, setViesti] = useState('');
  const [menot, setMenot] = useState(props.menot);
  //let date = new Date();
  //const [meno, setValues] = useState( { id: '0', maara: '', menotyyppiNimi: '', tarkennus: '', pvm: date } );
  //const [open, setOpen] = useState(false);

  /*dialog-box
  const handleClickOpen = () => {
    setOpen(true);
  };

  //dialog-box
  const handleClose = () => {
    setOpen(false);
  };
*/

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

  const muokkaa = async (thisRow) => {
      //halutut tiedot saatiin ja alert toimi
      alert("Editoimisominaisuutta en saanut valmiiksi. Editoitavan menon id " + thisRow.id + ' muut tiedot: Määrä: ' + thisRow.maara + ', Muistiinpano: ' + thisRow.tarkennus + ', Kategoria: ' + thisRow.menotyyppiNimi + ', Päivämäärä: ' + thisRow.pvm);
      //return <MenolomakeEdit meno={meno}/>
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

                  {/*}
                  setValues({
                    id: thisRow.id,
                    menotyyppiNimi: thisRow.menotyyppiNimi,
                    tarkennus: thisRow.tarkennus,
                    maara: thisRow.maara,
                    pvm: thisRow.pvm,
                });
                */}
                //return (<MenolomakeEdit meno={meno}/>);

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
            <Typography variant='h6' color='secondary'>Menot</Typography>
            <div style={{ height: 500, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} pageSize={10} />
            </div>
            <div>{viesti}</div>
        </div>
      );    
}


export default Menolista; 

   /*
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