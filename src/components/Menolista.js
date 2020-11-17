import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Summaaja from './Summaaja';
import {Container, Typography} from '@material-ui/core';


function Menolista(props) {

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

            { props.menot.map( tapahtuma => {
                return (
                    
                        <TableRow>
                            <TableCell key = { tapahtuma.tapahtuma_id }>{ tapahtuma.tapahtuma_id} </TableCell>
                            <TableCell>{tapahtuma.kohde.menotyyppiNimi}</TableCell>
                            <TableCell>{tapahtuma.kohde.tarkennus}</TableCell> 
                            <TableCell>{ tapahtuma.maara } </TableCell>
                            <TableCell>{ tapahtuma.pvm}</TableCell>
                        </TableRow>
                );
            })
            }
            <TableRow>
                <TableCell>Yhteensä</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{ <Summaaja summa = { props.menot}/>}</TableCell>
                <TableCell></TableCell>
            </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        </Container>
        </div>
    );
}


export default Menolista; 