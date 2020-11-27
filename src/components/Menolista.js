import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Typography, Button} from '@material-ui/core';
import axios from 'axios';

//https://material-ui.com/components/tables/#data-table --> käytettiin apuna material-ui:n datagridiä, jolla 
// pystyy sorttaamaan sarakkeiden tiedot helposti nousevaksi ja laskevaksi
//alla kommenteissa on alkuperäinen himmeli, jossa oli id:n kanssa ongelmia ja jolla listasin menot
function Menolista(props) {

  const url = 'http://localhost:8080';

  const [viesti, setViesti] = useState('');
  const [menot, setMenot] = useState(props.menot);


  const poista = async (id) => {
    try {
     // Kutsu backista poistoa
     const response = await axios.get('http://localhost:8080/meno/delete/' + id);

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
            field: "",
            headerName: "",
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params: CellParams) => (
              <Button
                color='primary'
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
      
                  return alert(JSON.stringify(thisRow, null, 4));
                }}
              >
                Edit
              </Button>
            )
          },
          {
            field: "",
            headerName: "",
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
                Delete
              </Button>
            )
          }
      ];
//<IconButton onClick={() => poista(matka.id)}><DeleteIcon className={ classes.icon }/></IconButton>
      const rows = menot;

      return (

        <div>
            <Typography variant='h6' color='secondary'>Tässä ovat kaikki menosi. Voit järjestellä menot kunkin sarakkeen mukaan nousevaksi tai laskevaksi.</Typography>
            <div style={{ height: 500, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} pageSize={10} />
            </div>
      <div>{viesti}</div>
        </div>
      );

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
    
}


export default Menolista; 