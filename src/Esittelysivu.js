import React from 'react';
import {Container, Typography, Button, Box} from '@material-ui/core'
import { Link } from 'react-router-dom';

function Esittelysivu() {
    return(
        <div>
                <Container fixed align='center' >
                    <Typography variant='h6' color='secondary'>Tämä on yksinkertainen taloudenhallintasovellus, johon voit kirjata menojasi.</Typography>
                    {/*Miten napit saa vierekkäin mutta niin että niiden välissä on vähän tilaa? */}
                    <Box mx='auto' margin={2}>
                    <Button 
                        variant="contained"
                        size="large" 
                        color="primary"
                        type='submit'
                    > <Link to='/listaa' style={{ textDecoration: 'none', color: "white" }}>Menolistaus</Link>
                    </Button>
                    </Box>
                    <Box>
                    <Button 
                        variant='contained'
                        size="large" 
                        color="secondary"
                        type='submit'
                    > <Link to='/lisaa' style={{ textDecoration: 'none', color: "white" }} >Menolomake</Link>
                    </Button>
                    </Box>
                    <p></p>
                </Container>
        </div>
    );
}

export default Esittelysivu;