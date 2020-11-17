import React from 'react';

function Summaaja (props) {
    let summa = 0;

    for (let i=0; i < props.summa.length; i++) {
        let hinta = parseInt(props.summa[i].maara);
        summa = summa + hinta;
    }

    return (
        <div>
            {summa}
        </div>
    );

}

export default Summaaja;