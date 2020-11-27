import React from 'react';
import SummaKuukausittain from './SummaKuukausittain';

function Jaottelija (props) {
    const kuukaudet = [
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

    props.jaettava.map( rivi => {
        let date = new Date();
        let month= date.parseDate(rivi.pvm).getMonth();

        kuukaudet.map(kuukausi => {
            if (kuukausi.nro === month) {
                let summa = rivi.summa;
                summa += rivi.summa;
                rivi.summa = summa;
            }
            //console.log("Kuukauden summa on " + kuukausi.summa);
        })
        
    })


    return ( <SummaKuukausittain kuukaudet={ kuukaudet } /> );
}

export default Jaottelija;