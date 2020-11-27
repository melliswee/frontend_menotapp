import React from 'react';
import Jaottelija from './Jaottelija';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {FormControl, InputLabel} from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Summaaja from './Summaaja';
import {Container, Typography} from '@material-ui/core';


function Menolista(props) {

    const jaottele = (e) => {
        e.preventDefault();
        return (<Jaottelija jaettava = {props.menot}/>)
    }
    
    return ( 
        
        <div>
        <FormControl>
        <InputLabel id='nappi'></InputLabel>
            <Button 
                variant="outlined"
                size="large" 
                color="secondary"
                type='submit'
                onClick={ (e) => jaottele(e) } 
            > Kuukausittain
            </Button>
        </FormControl>
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
}


export default Menolista; 