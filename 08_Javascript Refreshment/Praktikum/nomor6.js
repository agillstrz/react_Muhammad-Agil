// 6. Kalian memiliki variabel berikut ( let arr = [ 1.5 , 2.56,5.1 , 12.33 ] ) Bulatkan ke atas variable tersebut sehingga
// output yang dihasilkan adalah [ 2 , 3 , 5 , 12 ]

let arr = [1.5 ,2.56,5.1,12.33];

// jawaban no 6
const HASIL = arr.map(m=>Math.round(m));
console.log(HASIL);