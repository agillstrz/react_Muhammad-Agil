// 5. Kalian memiliki variabel berikut ( let value = [1,2,3,4,5,6 ] ) . Kalikan setiap value dalam array tersebut dengan
// dua . Sehingga , ketika dipanggil variable value mengeluarkan output berupa [ 2 , 4 , 6 , 8 , 10 , 12 ]


//jawaban no 5
let value = [1,2,3,4,5,6 ];

const hasil = value.map(m=>m*2);
console.log(hasil);
