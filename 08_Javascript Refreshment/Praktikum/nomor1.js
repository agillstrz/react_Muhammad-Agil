// jawaban soal praktikum nomor 1 yang terdiri dari 4 soal yaitu a,b,c,d

var a = 5 ;
let b = "kampus merdeka";
const nama ="Budi " ;
let terdaftar = false ;
let lengkap_arr = [a,b,nama,terdaftar]; 
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
// nama = b;
// kode diatas tidak dapat dijalankan karena variabel "nama" di deklarasikan dengan kata kunci const,yang mana value dari const tidak dapat diubah / tidak dapat diperbarui

console.log(`array = ${lengkap_arr[2]}`); // a. ambil index ke 2 dalam array dibaris 5 dan tampilkan dalam console log

// console.log ( "asal diakses = "+ asal ); 
// kode diatas tidak dapat dijalankan karena variael "asal" berada pada function scope.
console.log ( "a adalah = " + a ) ;
console.log ( "b adalah = " + b ) ;

// c. lakukan pemanggilan function perkenalan
perkenalan();


//d. mengubah kode agar menampilkan output yang sesuai pada soal -> telah dilakukan diatas.