import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, FormGroup, MenuItem, Select, TextField, Button, ButtonGroup, Container, Typography } from '@material-ui/core/';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import {Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import ClearIcon from '@material-ui/icons/Clear';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi';
import axios from 'axios';
import '../App.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 210,
      marginLeft: 0
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }));

  //const url = 'http://localhost:8080';
  const url = 'https://menotapp.herokuapp.com'

export default function Menolomake() {
    let date = new Date();
    const classes = useStyles();
    const [meno, setValues] = useState( { id: '0', maara: '', menotyyppiNimi: '', tarkennus: '', pvm: date } );
    const [viesti, setViesti] = useState('');

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
    /* muutettu datan rakennetta yksinkertaisemmaksi niin ettei sisäkkäisiä objelteja ole, joten voidaan käyttää muuta-funktiota
    const muutaKohdeNimi = (e) => {
        let uusiKohde = { menotyyppiNimi: e.target.value, tarkennus: meno.kohde.tarkennus }
        setValues( {
            ...meno,  kohde: uusiKohde
        });
    }
    */
    /* datan rakennetta muutettu noudattamaan tietokantaan sopivalla tavalla: tarkennus on tapahtuman ominaisuus, ei menotyypin --> voi käyttää muuta-funktiota
    oli näin ennen: {tapahtuma_id: '1', maara: '50', kohde: {menotyyppiId: '1', menotyyppiNimi: 'Ruoka ja juoma kotona', tarkennus: 'Alepa'}, pvm: '25.09.2020'}
    const muutaKohdeTarkennus = (e) => {
        let uusiKohde = { menotyyppiNimi: meno.kohde.menotyyppiNimi, tarkennus: e.target.value }
        setValues( {
            ...meno,  kohde: uusiKohde
        });
       
    }
    */

    const lisaaMeno = (e) => {
        e.preventDefault();

        const formData = {
            menotyyppiNimi: meno.menotyyppiNimi,
            tarkennus: meno.tarkennus,
            maara: meno.maara,
            pvm: meno.pvm.getFullYear()+ '-' + meno.pvm.getMonth() + '-' + meno.pvm.getDate(),
          }

        axios.post(url + '/meno/add', formData)
        .then(response => {
          if (response.status === 200) {
              setValues({
                  menotyyppiNimi: '',
                  tarkennus: '',
                  maara: '',
                  pvm: new Date(),
              });
              setViesti('Lisättiin');
          } else {
              setViesti('Lisäys ei onnistunut');
          }
      })
    }

    const tyhjenna = (e) => {
        //e.preventDefault();

        setValues(
            {id: '0', 
            maara: '', 
            menotyyppiNimi: '', 
            tarkennus: '', 
            pvm: date });

    }
    //tässä vain tyhjennetään lomake 
    const style = {
        textAlign: 'center'}

    return (        
        <div class='center'>
        <Container>
        <Typography variant='h6' color='primary'>Uusi meno</Typography>
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
        </FormControl><br/>

        <FormControl className={classes.formControl} required variant='outlined'> 
            <FormGroup>
                <InputLabel id='menotyyppiNimi' style={style}>Menokategoria</InputLabel><br/>                
                <Select
                    name='menotyyppiNimi'
                    value={ meno.menotyyppiNimi}
                    onChange={ (e) => muuta(e) }
                    label="Menotyyppi"
                >
                    <MenuItem value='Ruoka ja juoma kotona'>Ruoka ja juoma kotona</MenuItem>
                    <MenuItem value='Ruoka ja juoma ulkona'>Ruoka ja juoma ulkona</MenuItem>
                    <MenuItem value='Asuminen'>Asuminen</MenuItem>
                    <MenuItem value='Vaatteet'>Vaatteet</MenuItem>
                    <MenuItem value='Terveys'>Terveys</MenuItem>
                    <MenuItem value='Liikenne'>Liikenne</MenuItem>
                    <MenuItem value='Tietoliikenne ja viestintä'>Tietoliikenne ja viestintä</MenuItem>
                    <MenuItem value='Vakuutukset'>Vakuutukset</MenuItem>
                    <MenuItem value='Kodin hankinnat'>Kodin hankinnat</MenuItem>
                    <MenuItem value='Virkistys ja vapaa-aika'>Virkistys ja vapaa-aika</MenuItem>
                    <MenuItem value='Oma säästökohde'>Oma säästökohde</MenuItem>
                    <MenuItem value='Lainanhoito'>Lainanhoito</MenuItem>
                    <MenuItem value='Muut menot'>Muut menot</MenuItem>
                </Select>
                
            </FormGroup>
        </FormControl><br/>

        <FormControl className={classes.formControl} variant='outlined'>
            <FormGroup>
                <InputLabel id='tarkennus'></InputLabel>
                <TextField
                    id="outlined-multiline-tarkennus"
                    name='tarkennus'
                    value={meno.tarkennus}
                    onChange={ (e) => muuta(e)}
                    label="Tarkennus"
                    //defaultValue="Muistiinpano" //valitse joko tämä tai value, ei molempia
                    variant="outlined"
                    color="secondary"
                />
            </FormGroup>
        </FormControl><br/>

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
        </FormControl><br/>

        <FormControl className={classes.formControl}>
        <InputLabel id='nappi'></InputLabel>
        <ButtonGroup color='primary' fullWidth>
            <Button
                variant='contained'
                type='submit'
                onClick={ (e) => lisaaMeno(e) } 
            ><AddIcon/>
            </Button>
            <InputLabel id='poistonappi'></InputLabel>
            <Button 
                variant="outlined"
                color="secondary"
                type='submit'
                onClick={ (e) => tyhjenna() } 
            ><ClearIcon/>
            </Button>
            <Button component={ Link } to='/listaa'
                variant='contained'
                color="secondary"
            >
            <ListIcon/>
            </Button>
        </ButtonGroup>
        </FormControl>
        <Typography style={ {marginTop: 20} }>{ viesti }</Typography>
        </Container>
        </div>
        
    );
}