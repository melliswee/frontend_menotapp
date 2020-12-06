import React, {useState, useEffect} from 'react';
import {Container, Typography, Button, ButtonGroup} from '@material-ui/core'
import { Link } from 'react-router-dom';
import Jaottelija from './components/Jaottelija';

function Esittelysivu(props) {
    //const [menot, setMenot] = useState(props.menot);
    return(
        <div>
                <Container fixed align='center' >
                    <Typography variant='h6' color='secondary'>Tämä on yksinkertainen taloudenhallintasovellus, johon voit kirjata menojasi.</Typography>
                    <p></p>
                    <ButtonGroup>
                    <Button 
                        variant="contained"
                        size="large" 
                        color="primary"
                        type='submit'
                    > <Link to='/listaa' style={{ textDecoration: 'none', color: "white" }}>Menolistaus</Link>
                    </Button>
                    <Button 
                        variant='contained'
                        size="large" 
                        color="secondary"
                        type='submit'
                    > <Link to='/lisaa' style={{ textDecoration: 'none', color: "white" }} >Menolomake</Link>
                    </Button>
                    </ButtonGroup>
                    <p></p>
                </Container>

    {/*<Jaottelija menot={menot}/>*/}
        </div>
    );
}

export default Esittelysivu;