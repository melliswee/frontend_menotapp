
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('menot.db');
/*
const menot = [{tapahtuma_id: '1', maara: '50', menotyyppiNimi: 'Ruoka ja juoma kotona', tarkennus: 'Alepa', pvm: '2020-09-01'},
               {tapahtuma_id: '2', maara: '650', menotyyppiNimi: 'Asuminen', tarkennus: 'vuokra/vastike', pvm: '2020-09-15'}, 
               {tapahtuma_id: '3', maara: '19', menotyyppiNimi: 'Asuminen', tarkennus: 'vesimaksu', pvm: '2020-10-01'},
               {tapahtuma_id: '4', maara: '25', menotyyppiNimi: 'Tietoliikenne ja viestintä', tarkennus: 'puhelinlasku', pvm: '2020-10-12'},
               {tapahtuma_id: '5', maara: '10', menotyyppiNimi: 'Tietoliikenne ja viestintä', tarkennus:'laajakaistalasku', pvm: '2020-11-01'},
               {tapahtuma_id: '6', maara: '45', menotyyppiNimi: 'Ruoka ja juoma ulkona', tarkennus: 'ravintola Saba', pvm: '2020-11-24'},
               {tapahtuma_id: '7', maara: '8', menotyyppiNimi: 'Asuminen', tarkennus: 'lämmitys', pvm: '2019-01-01'},
               {tapahtuma_id: '8', maara: '45', menotyyppiNimi: 'Vaatteet', tarkennus: '', pvm: '2019-02-22'},
               {tapahtuma_id: '9', maara: '10', menotyyppiNimi: 'Terveys', tarkennus: 'lääkkeet', pvm: '2019-02-21'},
               {tapahtuma_id: '10', maara: '50', menotyyppiNimi: 'Liikenne', tarkennus: 'auto', pvm: '2019-03-14'},
               {tapahtuma_id: '11', maara: '45', menotyyppiNimi: 'Liikenne', tarkennus: 'julkinen liikenne', pvm: '2019-03-15'},
               {tapahtuma_id: '12', maara: '160', menotyyppiNimi: 'Vakuutukset', tarkennus: 'kotivakuutus', pvm: '2019-04-16'},
               {tapahtuma_id: '13', maara: '70', menotyyppiNimi: 'Kodin hankinnat', tarkennus: 'matto', pvm: '2019-05-11'},
               {tapahtuma_id: '14', maara: '30', menotyyppiNimi: 'Virkistys ja vapaa-aika', tarkennus: 'elokuvaliput', pvm: '2019-06-06'},
               {tapahtuma_id: '15', maara: '50', menotyyppiNimi: 'Oma säästökohde', tarkennus: 'matkakassa', pvm: '2019-07-18'},
               {tapahtuma_id: '16', maara: '60', menotyyppiNimi: 'Lainanhoito', tarkennus: 'opintolaina', pvm: '2020-08-17'},
               {tapahtuma_id: '17', maara: '20', menotyyppiNimi: 'Muut menot', tarkennus: 'kukkia äidille', pvm: '2020-08-01'},
            ];
*/
db.serialize( () => {

  let sql = "CREATE TABLE Meno (" +
   "id integer PRIMARY KEY NOT NULL, " +
   "maara integer NOT NULL, " +
   "tarkennus text, " +
   "menotyyppiNimi text NOT NULL, " +
   "pvm date NOT NULL" + ")";

  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Menotaulu tehtiin");
  })

  sql = "INSERT INTO `meno` (`id`, `maara`, `tarkennus`, `menotyyppiNimi`, `pvm`) "+
  " VALUES (1, '33', 'viikon ruoat', 'Ruoka ja juoma kotona', '2020-02-23')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Ruuat lisättiin");
  });

  sql = "INSERT INTO `meno` (`id`, `maara`, `tarkennus`, `menotyyppiNimi`, `pvm`) "+
  " VALUES (3, '22', 'ravintola Cool Greens', 'Ruoka ja juoma ulkona', '2020-03-01')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Ruuat lisättiin");
  });

  sql = "INSERT INTO `meno` (`id`, `maara`, `tarkennus`, `menotyyppiNimi`, `pvm`) "+
  " VALUES (4, '100', 'Friteerauskeitin', 'Kodin hankinnat', '2020-04-11')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Ruuat lisättiin");
  });

  sql = "INSERT INTO `meno` (`id`, `maara`, `tarkennus`, `menotyyppiNimi`, `pvm`) "+
  " VALUES (5, '11', 'nettilasku', 'Tietoliikenne ja viestintä', '2020-05-07')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Ruuat lisättiin");
  });

  sql = "INSERT INTO `meno` (`id`, `maara`, `tarkennus`, `menotyyppiNimi`, `pvm`) "+
  " VALUES (6, '50', 'matkakassa', 'Oma säästökohde', '2020-11-02')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Ruuat lisättiin");
  });

  sql = "INSERT INTO `meno` (`id`, `maara`, `tarkennus`, `menotyyppiNimi`, `pvm`) "+
  " VALUES (7, '22', 'ravintoaruoat', 'Ruoka ja juoma ulkona', '2020-11-16')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Ravintolaruuat lisättiin");
  });
});

sql = "INSERT INTO `meno` (`id`, `maara`, `tarkennus`, `menotyyppiNimi`, `pvm`) "+
" VALUES (2, '50', 'viikon ruoat', 'Ruoka ja juoma kotona', '2020-01-01')";
db.run(sql, (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log("Ruuat lisättiin");
});

/*
for (i = 0; i < menot.length; i++) {
  let id = menot[i].tapahtuma_id;
  let maara = menot[i].maara;
  let tarkennus = menot[i].tarkennus;
  let menotyyppiNimi = menot[i].menotyyppiNimi;
  let pvm = menot[i].pvm;

  sql = "INSERT INTO `meno` (`tapahtuma_id`, `maara`, `tarkennus`, `menotyyppiNimi`, `pvm`) "+
  " VALUES (" + id.toString() + ", " + maara.toString() + ", " + tarkennus.toString() + ", " + menotyyppiNimi.toString() + ", " + pvm.toString() + ")";

  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Taulukon rivi lisättiin");
  });
}


menot.map(tapahtuma => {
  let id = tapahtuma.tapahtuma_id;
  let maara = tapahtuma.maara.toString();
  let tarkennus = tapahtuma.tarkennus.toString();
  let menotyyppiNimi = tapahtuma.menotyyppiNimi.toString();
  let pvm = tapahtuma.pvm.toString();

  sql = "INSERT INTO `meno` (`tapahtuma_id`, `maara`, `tarkennus`, `menotyyppiNimi`, `pvm`) "+
  " VALUES (" + id + ", " + maara + ", " + tarkennus + ", " + menotyyppiNimi + ", " + pvm + ")";

  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Taulukon rivi lisättiin");
  });

})
*/

db.each("SELECT id, maara, menotyyppiNimi, tarkennus, pvm FROM meno", (err, row) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(row.id + ", " + row.menotyyppiNimi + ", " + row.tarkennus + ", " + row.maara + ", " + row.pvm);

});

db.close();
