
const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.json());
express.urlencoded({limit: '5mb', extended: true});

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('menot.db');

// back kuuntelee porttia 8080
app.listen(8080, () => {
    console.log('Node toimii localhost:8080');
});

// Reititys on pelkkä / esim. localhost:8080/
app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Toimii' })
});

// Reititys on /listaa localhost:8080/listaa/all
app.get('/listaa/all', (req, res, next) => {
	db.all("SELECT * FROM meno", (error, results) => {
    if (error) throw error;
    return res.status(200).json(results);
  });
});

app.get('/meno/one/:id', (req, res, next) => {
    let id = req.params.id;
    db.get('SELECT * FROM meno where id=?', [id], (error, result) => {
        if (error) throw error;

        if (typeof(result) == 'undefined')  {
          return res.status(200).send({});
        }
        return res.status(200).json(result);
    });
});

app.post('/meno/add',  (req, res, next) => {
    // Lomakkeelta tulleet tiedot
     let tap = req.body;
 
     db.run('INSERT INTO meno (menotyyppiNimi, tarkennus, maara, pvm) VALUES (?, ?, ?, ?)', [tap.menotyyppiNimi, tap.tarkennus, tap.maara, tap.pvm], function (error, result) {
         if (error) throw error;
 
         return res.status(200).json( {count: this.changes} );
     })
 })
//toimiiko?
 app.post('/meno/muokkaa',  (req, res, next) => {
     let tap = req.body; 
     /*
     let id = req.params.id;
     let maara = req.params.maara;
     let tarkennus = req.params.tarkennus;
     let menotyyppiNimi = req.params.menotyyppiNimi;
     let pvm = req.params.pvm;
    */
     db.run('UPDATE meno SET menotyyppiNimi=?, tarkennus=?, maara=?, pvm=?) WHERE id = ?', [tap.menotyyppiNimi, tap.tarkennus, tap.maara, tap.pvm, tap.id], function (error, result) {
         if (error) throw error;
 
         return res.status(200).json( {count: this.changes} );
     })
 })

app.get('/meno/delete/:id', (req, res, next) => {
    // Otetaan parametrina tulleen henkilon id
    let id = req.params.id;

    // Kuvan poistamienen puuttuu ratkaisusta
    db.run('DELETE FROM meno WHERE id = ?', [id],  function (error, result) {
        if (error) throw error;

        return res.status(200).json( {count: this.changes} );
    });

});

// Jos mikään aiempi reititys on sopinut, silloin suoritetaan tämä
app.get('*', (req, res, next) => {
    return res.status(404).send({ error: true, message: 'Ei pyydettyä palvelua' })
});
