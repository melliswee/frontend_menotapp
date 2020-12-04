import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container, Typography} from '@material-ui/core';

//ei käytetä vielä mihinkään, yritys luoda kuukausittainen summaus menoista
function SummaKuukausittain(props) {
    
    return ( 
        <div>
        <Container>
            <Typography variant='h6' color='secondary'>Menot</Typography>
        <p></p>
        <TableContainer component={Paper} color='primary'>
            <Table aria-label="menojen listaus">
            <TableHead>
                <TableRow>
                    <TableCell>Summa</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>

            { props.kuukaudet.map( (kuukausi) => {
                return (
                    <div>
                        <TableRow>
                            <TableCell key = {kuukausi.nro}>{ kuukausi.nimi }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell key = { kuukausi.nimi}>{ kuukausi.summa} </TableCell>
                        </TableRow>
                    </div>
                );
            })
            }
            </TableBody>
            </Table>
        </TableContainer>
        </Container>
        </div>
    );
}


export default SummaKuukausittain;