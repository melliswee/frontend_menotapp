/*const kuukaudet = [
    {nimi: "Tammikuu", nro: 1, summa: 0},
    {nimi: "Helmikuu", nro: 2, summa: 0},
    {nimi: "Maaliskuu", nro: 3, summa: 0},
    {nimi: "Huhtikuu", nro: 4, summa: 0},
    {nimi: "Toukokuu", nro: 5, summa: 0},
    {nimi: "Kesäkuu", nro: 6, summa: 0},
    {nimi: "Heinäkuu", nro: 7, summa: 0},
    {nimi: "Elokuu", nro: 8, summa: 0},
    {nimi: "Syyskuu", nro: 9, summa: 0},
    {nimi: "Lokakuu", nro: 10, summa: 0},
    {nimi: "Marraskuu", nro: 11, summa: 0},
    {nimi: "Joulukuu", nro: 12, summa: 0},
];

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

            for (let i = 0; i < menot.length; i++) {
                let date = new Date();
                let month = date.parseDate(menot[i].pvm).getMonth();

                for (let j= 0; j < kuukaudet.length; j++) {
                    console.log("Kuukausi on " + kuukaudet[j].nimi);
                    if (kuukaudet[j].nro === month) {
                        kuukaudet[j].summa += menot[i].summa;
                        console.log("Rahaa käytetty" + kuukaudet[j].nimi + " " + kuukaudet[j].summa);
                    }
                }
            }
            */
