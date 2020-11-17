import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, FormGroup, MenuItem, Select, TextField, Button, Container, Typography } from '@material-ui/core/';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi';

//lomakkeessa pitäisi olla syötteen tarkistus jotta saadaan vain oikeanlaisia tietoja lisättyä
//pitää keksiä tapa saada seuraava uniikki id lisättävälle riville

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 210,
      marginLeft: 0
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function Menolomake() {
    let date = new Date();
    const classes = useStyles();
    const [meno, setValues] = useState( { id: '0', maara: '', kohde: {menotyyppiId: '0', menotyyppiNimi: '', tarkennus: ''}, pvm: date } );


    const muuta = (e) => {
        setValues( {
            ...meno, [e.target.name]: e.target.value
        });
    }

    //vaikuttaa siltä ettei KeyBoardDatePickerin kanssa voi käyttää e.target:ia, koska sitä ei ole ("e.target is not defined" tms? 
    //joten oli tehtävä oma metodi päivän muuttamiselle
    const muutaPaiva = date => {
        setValues({
            ...meno, pvm: date
        });
    }

    

    const muutaKohdeNimi = (e) => {
        let uusiKohde = { menotyyppiNimi: e.target.value, tarkennus: meno.kohde.tarkennus }
        setValues( {
            ...meno,  kohde: uusiKohde
        });
    }

    const muutaKohdeTarkennus = (e) => {
        let uusiKohde = { menotyyppiNimi: meno.kohde.menotyyppiNimi, tarkennus: e.target.value }
        setValues( {
            ...meno,  kohde: uusiKohde
        });
       
    }

    const lisaaMeno = (e) => {
        e.preventDefault();
        //tässä vain tyhjennetään lomake
        setValues({id: '0', maara: '', kohde: {menotyyppiId: '0', menotyyppiNimi: '', tarkennus: ''}, pvm: date });
    }

    return (
        <div>
        <Container>
            <Typography variant='h6' color='secondary'>Lisää uusi meno</Typography>
        <FormControl className={classes.formControl} variant='outlined'> 
            <FormGroup>
                <InputLabel id='maara'></InputLabel>
                <TextField 
                    required
                    fullWidth
                    id="outlined-basic-maara" 
                    name='maara'
                    type='number'
                    value={ meno.maara }
                    onChange={ (e) => muuta(e)}
                    label="Määrä" 
                    variant="outlined" 
                    
                />
            </FormGroup>
        </FormControl>

        <FormControl className={classes.formControl} required variant='outlined'> 
            <FormGroup>
                <InputLabel id='menotyyppiNimi'>Menotyyppi</InputLabel><br/>
                <Select
                    name='menotyyppiNimi'
                    value={ meno.kohde.menotyyppiNimi}
                    onChange={ (e) => muutaKohdeNimi(e) }
                    label="Menotyyppi"
                    
                >
                    <MenuItem value={1}>Ruoka ja juoma kotona</MenuItem>
                    <MenuItem value={2}>Ruoka ja juoma ulkona</MenuItem>
                    <MenuItem value={3}>Asuminen</MenuItem>
                    <MenuItem value={4}>Vaatteet</MenuItem>
                    <MenuItem value={5}>Terveys</MenuItem>
                    <MenuItem value={6}>Liikenne</MenuItem>
                    <MenuItem value={7}>Tietoliikenne ja viestintä</MenuItem>
                    <MenuItem value={9}>Vakuutukset</MenuItem>
                    <MenuItem value={10}>Kodin hankinnat</MenuItem>
                    <MenuItem value={11}>Virkistys ja vapaa-aika</MenuItem>
                    <MenuItem value={12}>Oma säästökohde</MenuItem>
                    <MenuItem value={13}>Lainanhoito</MenuItem>
                    <MenuItem value={14}>Muut menot</MenuItem>
                </Select><br/>
            </FormGroup>
        </FormControl>

        <FormControl className={classes.formControl} variant='outlined'>
            <FormGroup>
                <InputLabel id='tarkennus'></InputLabel>
                <TextField
                    id="outlined-multiline-tarkennus"
                    name='tarkennus'
                    value={meno.kohde.tarkennus}
                    onChange={ (e) => muutaKohdeTarkennus(e)}
                    label="Tarkennus"
                    //defaultValue="Muistiinpano" //valitse joko tämä tai value, ei molempia
                    variant="outlined"
                    color="secondary"
                />
            </FormGroup>
        </FormControl>

        <FormControl className={classes.formControl} variant='outlined'>
            <FormGroup>
                <InputLabel id='pvm'></InputLabel>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fiLocale} variant='outlined'>
                    <KeyboardDatePicker
                        required 
                        label='Päivämäärä'
                        name='pvm'
                        value={meno.pvm}
                        onChange= { (e) => muutaPaiva(e)}
                        format='dd.MM.yyyy'
                        variant='outlined'
                        
                    />
                </MuiPickersUtilsProvider>
            </FormGroup>
        </FormControl>

        <FormControl className={classes.formControl}>
        <InputLabel id='nappi'></InputLabel>
            <Button 
                variant="outlined"
                size="large" 
                color="secondary"
                type='submit'
                onClick={ (e) => lisaaMeno(e) } 
            > Lisää
            </Button>
        </FormControl>
        </Container>
        </div>
    );
}

