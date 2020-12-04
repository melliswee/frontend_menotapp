import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, FormGroup, MenuItem, Select, TextField, Button, Container, Typography } from '@material-ui/core/';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi';
import axios from 'axios';

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

  const url = 'http://localhost:8080';

function MenolomakeEdit(props) {
    const classes = useStyles();

    //let {id, maara, tarkennus, menotyyppiNimi, pvm} = useParams();

    const [meno, setValues] = useState({
        id: props.meno.id,
        maara: props.meno.maara,
        tarkennus: props.meno.tarkennus,
        menotyyppiNimi: props.meno.menotyyppiNimi,
        pvm: props.meno.pvm
    });

    const [viesti, setViesti] = useState('');

    const muuta = (e) => {
        setValues( {
            ...meno, [e.target.name]: e.target.value
        });
    }

    const muutaPaiva = date => {
        setValues({
            ...meno, pvm: date
        });
    }

    const muokkaaMeno = (e) => {
        e.preventDefault();

        const formData = {
            id: meno.id,
            menotyyppiNimi: meno.menotyyppiNimi,
            tarkennus: meno.tarkennus,
            maara: meno.maara,
            pvm: meno.pvm.getFullYear()+ '-' + meno.pvm.getMonth() + '-' + meno.pvm.getDate(),
          }

        axios.post(url + '/meno/muokkaa', formData) ///:id/:maara/:tarkennus/:menotyyppiNimi/pvm'
        .then(response => {
          if (response.status === 200) {
              setViesti('Muokattiin');
          } else {
              setViesti('Muokkaus ei onnistunut');
          }
      })
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
                </Select><br/>
            </FormGroup>
        </FormControl>

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
                onClick={ (e) => muokkaaMeno(e) } 
            > Lisää
            </Button>
        </FormControl>
        <Typography style={ {marginTop: 20} }>{ viesti }</Typography>
        </Container>
        </div>
    );
}

export default MenolomakeEdit;