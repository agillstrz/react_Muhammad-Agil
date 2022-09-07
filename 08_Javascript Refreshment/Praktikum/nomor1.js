// jawaban soal praktikum nomor 1 yang terdiri dari 4 soal yaitu a,b,c,d

let a = 5 ;
let b = "kampus merdeka";
const nama ="Budi " ;
let terdaftar = false ;
let lengkapArr = [a,b,nama,terdaftar]; 
function perkenalan () {
  let asal = "indonesia";
  return console.log (
    "Perkenalkan nama saya " +
      nama +
        "nomor urut " +
      a +
        " sekarang sedang mengikuti "+
      b +
      " berasal dari "+
      asal
      );
}
//  b. ubah kode agar sehingga baris dibawah dapat tampil. kode semula -> (terdaftar === true)
if ( !terdaftar === true ) {
  console.log ( nama + "terdaftar sebagai kegiatan kampus merdeka " );
}

a=b;


console.log(`array = ${lengkapArr[2]}`); // a. ambil index ke 2 dalam array dibaris 5 dan tampilkan dalam console log
console.log ( "a adalah = " + a ) ;
console.log ( "b adalah = " + b ) ;

// c. lakukan pemanggilan function perkenalan
perkenalan();


//d. mengubah kode agar menampilkan output yang sesuai pada soal -> telah dilakukan diatas.