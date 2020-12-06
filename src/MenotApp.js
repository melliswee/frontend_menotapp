
import React from 'react';
import {createMuiTheme, MuiThemeProvider, CssBaseline} from '@material-ui/core'
//import Menolista from './components/Menolista';
import Menolomake from './components/Menolomake';
import MenuMUI from './components/MenuMUI';
import { blue, pink, blueGrey, indigo } from '@material-ui/core/colors';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Esittelysivu from './Esittelysivu';
import HaeMenot from './components/HaeMenot';
import HaeMeno from './components/HaeMeno';

/*
const menot = [{tapahtuma_id: '1', maara: '50', menotyyppiNimi: 'Ruoka ja juoma kotona', tarkennus: 'Alepa', pvm: '25.09.2020'},
               {tapahtuma_id: '2', maara: '650', menotyyppiNimi: 'Asuminen', tarkennus: 'vuokra/vastike', pvm: '02.09.2020'}, 
               {tapahtuma_id: '3', maara: '19', menotyyppiNimi: 'Asuminen', tarkennus: 'vesimaksu', pvm: '02.09.2020'},
               {tapahtuma_id: '4', maara: '25', menotyyppiNimi: 'Tietoliikenne ja viestintä', tarkennus: 'puhelinlasku', pvm: '15.09.2020'},
               {tapahtuma_id: '5', maara: '10', menotyyppiNimi: 'Tietoliikenne ja viestintä', tarkennus:'laajakaistalasku', pvm: '16.09.2020'},
               {tapahtuma_id: '6', maara: '45', menotyyppiNimi: 'Ruoka ja juoma ulkona', tarkennus: 'ravintola Saba', pvm: '04.09.2020'},
               {tapahtuma_id: '7', maara: '8', menotyyppiNimi: 'Asuminen', tarkennus: 'lämmitys', pvm: '14.09.2020'},
               {tapahtuma_id: '8', maara: '45', menotyyppiNimi: 'Vaatteet', tarkennus: '', pvm: '04.09.2020'},
               {tapahtuma_id: '9', maara: '10', menotyyppiNimi: 'Terveys', tarkennus: 'lääkkeet', pvm: '04.09.2020'},
               {tapahtuma_id: '10', maara: '50', menotyyppiNimi: 'Liikenne', tarkennus: 'auto', pvm: '02.09.2020'},
               {tapahtuma_id: '11', maara: '45', menotyyppiNimi: 'Liikenne', tarkennus: 'julkinen liikenne', pvm: '11.09.2020'},
               {tapahtuma_id: '12', maara: '160', menotyyppiNimi: 'Vakuutukset', tarkennus: 'kotivakuutus', pvm: '01.09.2020'},
               {tapahtuma_id: '13', maara: '70', menotyyppiNimi: 'Kodin hankinnat', tarkennus: 'matto', pvm: '04.09.2020'},
               {tapahtuma_id: '14', maara: '30', menotyyppiNimi: 'Virkistys ja vapaa-aika', tarkennus: 'elokuvaliput', pvm: '05.09.2020'},
               {tapahtuma_id: '15', maara: '50', menotyyppiNimi: 'Oma säästökohde', tarkennus: 'matkakassa', pvm: '01.09.2020'},
               {tapahtuma_id: '16', maara: '60', menotyyppiNimi: 'Lainanhoito', tarkennus: 'opintolaina', pvm: '01.09.2020'},
               {tapahtuma_id: '17', maara: '20', menotyyppiNimi: 'Muut menot', tarkennus: 'kukkia äidille', pvm: '30.09.2020'},
            ];
*/

const theme= createMuiTheme({
    palette: { 
        primary: {main: indigo[700], contrastText: '#fafafa'}, //deepPurple: #673ab7 //red: #f44336 //tummansininen: '#303f9f'
        secondary: {main: blueGrey[600], contrastText: '#fafafa'}, //indigo: #3d5afe // teal: #1de9b6
        text: {primary: indigo[500], secondary: pink[blueGrey], contrastText: '#fafafa'}, 
        action: {active: pink[500], hover: blue[200], selected: blue[300]},
        background: {default: '#fafafa'}
     },
    typography: { fontFamily: ['PT Sans', 'sans-serif'], },
    //overrides: {  },
});

function MenotApp() {
    return(
        <BrowserRouter>
        <div>
        <MuiThemeProvider theme= {theme}>
        <div>
                <CssBaseline/>
                <MenuMUI/>
                <Switch>
                    <Route exact path='/' component={ Esittelysivu }/>
                    <Route path='/etusivu' component={ Esittelysivu }/>
                    <Route path='/listaa' component={HaeMenot}/>
                    {/*<Route path='/listaa' 
                        render={(props) => <Menolista {...props} menot={ menot }/>} />*/}
                    <Route path='/lisaa' component={ Menolomake }/>
                    <Route path='/meno/muokkaa/:id' component={ HaeMeno } />
                    {/*/:id/:maara/:tarkennus/:menotyyppiNimi/:pvm */}
                    <Route component={ MenotApp }/>
                </Switch>


        </div>
        </MuiThemeProvider>
        </div>
        </BrowserRouter>
    );
}


export default MenotApp;