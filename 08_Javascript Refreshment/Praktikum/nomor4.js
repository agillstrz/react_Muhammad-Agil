// 4. Kalian memiliki sebuah variabel berikut ( let bdays = ['10 -17 ','05-19','20-19']) . Ubahlah tanda (-) dalam
// variabel tersebut menjadi (/) sehingga output yang akan keluar dalam console menjadi ['10/17', '05/19','20/19'
// ]

let bdays = ['10-17','05-19','20-19'];
//expect output -> ['10/17','05/19','20/19']

const HASIL = bdays.map(m=>m.replace('-','/'));
console.log(HASIL);

